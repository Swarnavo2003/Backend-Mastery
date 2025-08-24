import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully", {
      host: conn.connection.host,
      port: conn.connection.port,
      dbname: conn.connection.name,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
