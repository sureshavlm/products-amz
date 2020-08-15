const express = require('express');

var router = express.Router();

router.get('/all', (req, res) => {
	res.json(['Macbook Pro', 'Lenovo', 'Sony']);
});

router.get('/add', (req, res) => {
	res.end('Product added successfully.');
});

module.exports = router;