<h2>team amex </h2>
<h3>hackout'25</h3>
# 🌱 Blockchain-Based Green Hydrogen Credit System  
*A Hackout’25 Project by Team Amex*

## 📌 Problem Statement  
In the transition to low-carbon economies, there is **no trusted way to prove hydrogen is truly “green.”**  
Current challenges include:  
- Fraud or double counting of credits  
- Lack of transparency between producers, buyers, and regulators  
- Weak links with auditors & government checkers  

## Our Solution  
We built a **Blockchain-Based Green Hydrogen Credit System** where:  
- Every unit of certified green hydrogen is **issued as a blockchain credit**.  
- **Smart Contracts** ensure no fraud or double counting.  
- A **real-time dashboard** enables producers, buyers, regulators, and auditors to track credits seamlessly.  
- **IoT/Drones** feed production & site data for transparency.  
- **Auditors & Government agencies** can verify and monitor compliance.  

 **Outcome**: A trusted, transparent, and tamper-proof ecosystem that boosts confidence in green hydrogen markets.  

## 🏗️ System Architecture
Data Sources (IoT, Drones, Sensors)
↓
Blockchain Layer (Smart Contracts, Certification, Transactions)
↓
AI/ML Layer (Fraud Detection, Anomaly Checks)
↓
Application Layer (Web Dashboard, Mobile App, APIs)

## 🎯 Features  

- 🔹 **Producer Dashboard** → Mint & list hydrogen credits  
- 🔹 **Buyer Dashboard** → Purchase & retire credits  
- 🔹 **Regulator Dashboard** → Monitor transactions, prevent fraud  
- 🔹 **Auditor Tools** → Verify credits, trace provenance  
- 🔹 **Smart Contracts** → Immutable, fraud-proof recordkeeping  
- 🔹 **AI/ML Checks** → Anomaly & fraud detection  
- 🔹 **Multi-Country Support** → Standardized verification for global trade  

## 🛠️ Tech Stack  

**Frontend:** [Next.js](https://nextjs.org/), React, Tailwind CSS  
**Backend:** Node.js, Express, REST APIs  
**Blockchain:** Solidity Smart Contracts, Ethers.js/Web3.js  
**Database:** MongoDB / PostgreSQL (for off-chain indexing)  
**Storage:** Cloud/IPFS for IoT & drone data evidence  
**Security:** JWT Auth, Data Encryption  
**Extras:** IoT/Drones integration, AI/ML fraud detection  

## 🚀 Getting Started  

### 1️⃣ Prerequisites  
- Node.js (>= 18)  
- npm / yarn  
- MongoDB or PostgreSQL running  
- MetaMask wallet + Testnet (e.g., Sepolia)  
- Hardhat/Foundry for smart contract deployment  

### 2️⃣ Clone Repository  
```bash
git clone https://github.com/ahirv1669-ux/daiict-team-amex.git
cd daiict-team-amex

# Frontend
npm install

# Backend
cd backend
npm install

### Create .env.local (frontend) and .env (backend):

Frontend (.env.local):
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
NEXT_PUBLIC_CONTRACT_ADDRESS=0xYourContract
NEXT_PUBLIC_API_URL=http://localhost:5000

Backend (.env):
PORT=5000
DB_URI=mongodb://localhost:27017/greenhydrogen
RPC_URL=https://sepolia.infura.io/v3/YOUR_KEY
CONTRACT_ADDRESS=0xYourContract
JWT_SECRET=supersecret

## run project :
# Backend
cd backend
npm run dev

# Frontend
cd ..
npm run dev

Now visit → http://localhost:3000

🌍 Future Scope
	•	🌐 Multi-country data collaboration for global hydrogen trade
	•	🏛️ Policy-level adoption into government carbon frameworks
	•	📡 Advanced IoT & AI integration for real-time fraud detection

🤝 Team Amex – Hackout’25
	•	👨‍💻 Khush Chaniyara – full-stack developer
  •	👨‍💻 priyank kothiya  – database manage and front-end developer
  •	👨‍💻 vishal chandravadiya – frontend developer and github master
  •	👨‍💻 parth vekariya – supporter and frontend developer
