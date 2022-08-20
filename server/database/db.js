import mongoose from "mongoose";

export const Connection = async (mongoDbUrl) => {
  try {
    await mongoose.connect(mongoDbUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfuly !");
  } catch (error) {
    console.log(error.message);
  }
};

export default Connection;
