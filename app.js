const express = require('express');
const prodRoutes = require('./routes/');

const app = express();

const port = process.env.PORT || 8080;

app.use('/v1/api/products', prodRoutes);

app.use('/', (req, res)=> {
	res.end('Route not found!');
});

app.listen(port, () =>{
	console.log('Products microservice running on port %s', port);
});