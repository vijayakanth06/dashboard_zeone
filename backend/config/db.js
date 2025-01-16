const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

process.env.MONGO_URI = 'mongodb+srv://vijay:vijay@zeone.hqpbf.mongodb.net/test?retryWrites=true&w=majority&appName=zeone';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
