var http = require('http')
var fs = require('fs')

var fileToServe = '.\luke.json'  // .\ is for node.js - don't need if in same folder

var server = http.createServer((req, res)=> {
    var srcStream = fs.createReadStream(fileToServe)

    srcStream.pipe(res)

    res.writeHead(200, {'Content-type' : 'application/json'})
})

server.listen(8000)