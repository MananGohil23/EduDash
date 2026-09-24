const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error(
      "MONGO_URI is not set. Create a backend/.env file containing MONGO_URI=<your MongoDB connection string>."
    );
  }

  // Node 18+ resolves "localhost" to IPv6 (::1) first, which often cannot
  // reach a MongoDB instance listening on IPv4. Prefer the IPv4 loopback.
  const normalizedUri = uri.replace("://localhost", "://127.0.0.1");

  await mongoose.connect(normalizedUri, {
    serverSelectionTimeoutMS: 10000,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
