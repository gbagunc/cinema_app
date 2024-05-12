import mongoose from "mongoose";
import { MONGO_URL } from "../config/constants";

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URL, {
      dbName: "cinema",
    })
    .then(() => {
      console.info("MongoDB Connected");
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default connectDB;
