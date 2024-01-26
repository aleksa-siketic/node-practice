const mongoose = require('mongoose');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const users = require('./data/users'); 
const products = require('./data/products');
const userModel = require('./models/userModel');
const productModel = require('./models/productModel');
const orderModel = require('./models/orderModel');

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await userModel.deleteMany();
        await productModel.deleteMany();
        await orderModel.deleteMany();

        const createdUsers = await userModel.insertMany(users);
        const adminUser = createdUsers[0]._id
        await productModel.insertMany(products);

        console.log('Data Imported!')
        process.exit();

    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await userModel.deleteMany();
        await productModel.deleteMany();
        await orderModel.deleteMany();

        console.log('Data Destroyed!');
        process.exit();

    } catch (error) {
        console.error(`${error}`);
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }




