'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'node'
});

connection.query(
	'SELECT id, content FROM test',
	function (err, results, fields) {
		if (err) {
			console.log('Ooops, this shouldn\'t happen!');
		} else {
			console.log(results);
		}
		connection.end();
	}
);
