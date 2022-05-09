import mongoose from 'mongoose';
const dataDb = new mongoose.Schema({
    category1: {
        type : String,
    },
    category2: {
        type : String,
    },
    category3: {
        type : String,
    },
    category4: {
        type : String,
    }
}) 

const categories = new mongoose.model('categories',dataDb)

categories.create({
    category1 : 'carnes',
    category2 : 'salsas',
    category3 : 'aderezos',
    category4 : 'verduras'
})


const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/categoies', {
      useUnifiedTopology: true,
      useNewUrlParser: true,      
    });
    console.log('MongoDB connected:');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
