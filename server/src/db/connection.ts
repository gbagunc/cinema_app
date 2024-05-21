import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/", {
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
