import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
  } catch (error) {
    console.error("mongoDB connection failed :", error);
  }
};

export default connectDB;
