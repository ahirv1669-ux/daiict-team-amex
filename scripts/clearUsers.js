// scripts/clearUsers.js
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/green-ledger';

async function main() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  await db.collection('users').deleteMany({});
  await db.collection('producers').deleteMany({});
  await db.collection('buyers').deleteMany({});
  await db.collection('regulators').deleteMany({});
  console.log('Cleared users, producers, buyers, and regulators collections.');
  await client.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
