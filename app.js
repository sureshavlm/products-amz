const express = require('express');
const prodRoutes = require('./routes/');

const app = express();

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true); 
    // Pass to next layer of middleware
    next();
});

app.use('/v1/api/products', prodRoutes);

app.use('/', (req, res)=> {
	res.end('This is Products Microservice runnning on process: ' + process.pid);
});


module.exports = app;
