const products = require('../models/productModel');

const createProduct = () => {

}

const getProducts = async () => {
    const productList = await products.find();
    return productList
}

const getProduct = (id) => {
    return productModel.findById(id);
}

module.exports = {createProduct, getProducts, getProduct}