const mongoose = require("mongoose");
import dotenv from 'dotenv';
dotenv.config()

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('database is connected')
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDb;