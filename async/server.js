'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer(function (req, res) {
	const pathname = url.parse(req.url).pathname;
	const query = url.parse(req.url).query;
	const id = querystring.parse(query)['id'];

	const result = {
		pathname,
		id,
		value: Math.floor(Math.random() * 100)
	};

	// setTimeout(function () {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(result));
	// }, 2000 + Math.floor(Math.random() * 1000));
}).listen(4200, function () {
	console.log("Running on 4200");
});
