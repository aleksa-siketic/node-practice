const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(logger);

app.get('/',(req, res) => {
    res.send('Homepage ...');
})

app.get('/about',(req, res) => {
    res.send('About route ...');
})

app.get('/contact',(req, res) => {
    res.send('Contact route ...');
})

const userRouter = require('./routes/users');
const roleRouter = require('./routes/roles');
const productsRouter = require('./routes/products');

app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/products', productsRouter);

function logger (req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(port, (req, res) => { 
    console.log(`Listening on port: ${port}`);
});