import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connect to MongoDB
export const Connectdb = {
  connect: () => {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("✅ Connected to MongoDB");
      })
      .catch((err) => {
        console.error("❌ Failed to connect to MongoDB", err);
      });
  },
};

