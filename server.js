#!/usr/bin/env node

var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/html" });
	fs.readFile("index.html", function (error, content) {
		response.end(content, "utf-8");
	});
}).listen(1234);
