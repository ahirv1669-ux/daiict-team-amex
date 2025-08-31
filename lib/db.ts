import { MongoClient, type Db, type Collection, type Document } from "mongodb"
import bcrypt from "bcryptjs"

let client: MongoClient | null = null
let db: Db | null = null

export type Role = "producer" | "buyer" | "regulator"

export interface User {
  _id?: any
  username: string
  passwordHash: string
  role: Role
  createdAt: Date
}

export interface Producer {
  _id?: any
  username: string
  createdAt: Date
}

export interface Buyer {
  _id?: any
  username: string
  createdAt: Date
}

export interface Regulator {
  _id?: any
  username: string
  createdAt: Date
}

export interface Batch {
  _id?: any
  batchId: string // H2-YYYY-XXX
  unitsKg: number
  productionDate: string // ISO date
  producerUsername: string
  status: "available" | "sold"
  createdAt: Date
}

export interface Purchase {
  _id?: any
  batchId: string
  buyerUsername: string
  amountUsd?: number
  purchasedAt: Date
}

export async function getDb() {
  if (db) return db
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/green-ledger"
  client = new MongoClient(uri)
  await client.connect()
  db = client.db()
  await ensureIndexesAndSeed(db)
  return db
}

async function ensureIndexesAndSeed(db: Db) {
  const users = db.collection<User>("users")
  const producers = db.collection<Producer>("producers")
  const buyers = db.collection<Buyer>("buyers")
  const regulators = db.collection<Regulator>("regulators")
  const batches = db.collection<Batch>("batches")
  const purchases = db.collection<Purchase>("purchases")

  await users.createIndex({ username: 1 }, { unique: true })
  await producers.createIndex({ username: 1 }, { unique: true })
  await buyers.createIndex({ username: 1 }, { unique: true })
  await regulators.createIndex({ username: 1 }, { unique: true })
  await batches.createIndex({ batchId: 1 }, { unique: true })
  await purchases.createIndex({ batchId: 1 })

  const userCount = await users.countDocuments()
  if (userCount === 0) {
    const seed = [
      { username: "producer", pass: "producer123", role: "producer" as const },
      { username: "buyer", pass: "buyer123", role: "buyer" as const },
      { username: "regulator", pass: "regulator123", role: "regulator" as const },
    ]
    for (const s of seed) {
      const passwordHash = await bcrypt.hash(s.pass, 10)
      await users.insertOne({ username: s.username, passwordHash, role: s.role, createdAt: new Date() })
      if (s.role === "producer") await producers.insertOne({ username: s.username, createdAt: new Date() })
      if (s.role === "buyer") await buyers.insertOne({ username: s.username, createdAt: new Date() })
      if (s.role === "regulator") await regulators.insertOne({ username: s.username, createdAt: new Date() })
    }
    // also seed a batch
    await batches.insertOne({
      batchId: `H2-${new Date().getFullYear()}-001`,
      unitsKg: 250,
      productionDate: new Date().toISOString().slice(0, 10),
      producerUsername: "producer",
      status: "available",
      createdAt: new Date(),
    })
  }
}

export function col<T extends Document = any>(name: string): Collection<T> {
  if (!db) throw new Error("DB not initialized. Call getDb() first.")
  return db.collection<T>(name)
}

// If you use mongoose, ensure it's installed: npm install mongoose @types/mongoose
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: process.env.MONGODB_DB || "test",
      })
      .then((mongoose: typeof import("mongoose")) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
