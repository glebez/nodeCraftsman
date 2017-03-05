'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

connection.query('CREATE DATABASE node', function (err) {
	if (err) console.log('Database creation failed.');
});

connection.query('USE node', function (err) {
	if (err) console.log('Switch to node database failed');
});

connection.query('CREATE TABLE test ' +
	'(id INT(11) AUTO_INCREMENT, ' +
	' content VARCHAR(255), ' +
	' PRIMARY KEY(id))',
	function (err) {
		if (err) console.log('Table \'test\' creation failed.');
	}
);

connection.query('INSERT INTO test (content) VALUES ("Hello")');
connection.query('INSERT INTO test (content) VALUES ("World")');

connection.end();
