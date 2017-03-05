'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'node'
});

const query = connection.query('SELECT id, content FROM test');

query.on('error', function (err) {
	console.log('Ooops, this shouldn\'t happen!');
	console.log(err);
})

query.on('fields', function (fields) {
	console.log('Got fields info');
})

query.on('result', function (result) {
	console.log('Got result, yay!');
	console.log(result);
})

query.on('end', function () {
	console.log('Aaand we\'re done');
	connection.end();
});
