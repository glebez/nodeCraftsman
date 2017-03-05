'use strict';

var fs = require('fs');

var FileSizeWatcher = function (path) {
	this.callbacks = {};
	if (/^\//.test(path) === false) {
		process.nextTick(function () {
			this.callbacks['error']('Path does not start with a slash');
		}.bind(this));
		return;
	}

	fs.stat(path, function (err, stats) {
		this.lastfilesize = stats.size;
	}.bind(this));

	this.interval = setInterval(function () {
		fs.stat(path, function (err, stats) {
			if (stats.size > this.lastfilesize) {
				this.callbacks['grew'](stats.size - this.lastfilesize);
			} else if (stats.size < this.lastfilesize) {
				this.callbacks['shrank'](this.lastfilesize - stats.size);
			}
			this.lastfilesize = stats.size;
		}.bind(this));
	}.bind(this), 1000);
};

FileSizeWatcher.prototype.on = function (eventType, callback) {
	this.callbacks[eventType] = callback;
};

FileSizeWatcher.prototype.stop = function (eventType, callback) {
	clearInterval(this.interval);
};

module.exports = FileSizeWatcher;
