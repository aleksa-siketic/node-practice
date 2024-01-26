const express = require('express');
const products = require('../data/products');
const { getProducts, getProduct } = require('../services/product-service');

const router = express.Router();

router.route('/')
.get((req, res) => {
    const data = getProducts();
    res.json(data);
})

router.route('/:id')
.get(async (req, res) => {
    const product = await getProduct(req.params.id)
    res.json(product);
})
.post((req, res) => {
    res.send(`Updatig product with id: ${req.params.id}`);
})
.delete((req, res) => {
    res.send(`Deleting product with id: ${req.params.id}`);
})

module.exports = router;