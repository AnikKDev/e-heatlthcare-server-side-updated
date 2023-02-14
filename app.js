const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middlewares
app.use(express.json());
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

// routes 
const userRoute = require('./routes/users.route')
const medicineRoute = require('./routes/medicine.route');
const ordersRoute = require('./routes/orders.route');
const checkoutRoute = require('./routes/checkout.route');
const verifyJWT = require('./middlewares/jwt.middleware');
// routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/medicine', medicineRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/checkout', checkoutRoute);


app.get('/', (req, res) => {
    res.send('Hello...route is working fine')
});

module.exports = app;