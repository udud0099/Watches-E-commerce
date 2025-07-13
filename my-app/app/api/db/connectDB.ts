import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log("ok aal ok" + conn.connection.host);
  } catch (error: any) {
    console.log("error connect to mongo bd", error.message);
    process.exit(1)
    
  }
};
