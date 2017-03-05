'use strict';
const request = require('request');
const async = require('async');

const getUserName = function (cb) {
	request.get(
		'http://localhost:4200/getUserName?id=1234',
		function (err, res, body) {
			const result = JSON.parse(body);
			cb(err, result.value);
		}
	);
};

const getUserStatus = function (cb) {
	request.get(
		'http://localhost:4200/getUserStatus?id=1234',
		function (err, res, body) {
			const result = JSON.parse(body);
			cb(err, result.value);
		}
	);
};

async.parallel([getUserName, getUserStatus], function (err, results) {
	console.log(`The status of ${results[0]} user is ${results[1]}`);
})
