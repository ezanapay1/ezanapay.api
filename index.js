const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


// test route
app.get('/', (req, res, next) => {
    res.send('Hello World');
});

// CRUD Routes /users
app.use('/users', require('./routes/user'));

// 404 error
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found"
    })
})

// error handling
app.use((e, req, res, next) => {
    console.log(e);
    const status = e.statusCode || 500
    const message = e.message
    res.status(status).json({
        message: message
    })
})

// Sync database
sequelize
    .sync()
    .then(res => {
        console.log("Database connected!");
        app.listen(3000);
    })
    .catch(e => console.log(e))

