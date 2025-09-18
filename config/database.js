import mongoose from "mongoose";

// Connect to MongoDB
export const Connectdb = {
  connect: () => {
    mongoose
      .connect("mongodb://127.0.0.1:27017/contact-curd")
      .then(() => {
        console.log("✅ Connected to MongoDB");
      })
      .catch((err) => {
        console.error("❌ Failed to connect to MongoDB", err);
      });
  },
};

