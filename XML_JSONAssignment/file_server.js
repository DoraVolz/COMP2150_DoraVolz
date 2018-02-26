var http = require('http') // calling http module
var fs = require('fs') // calling fs module (file system)

var fileToServe = 'instructors.json'  

// calling createServer method passing function
// (request client to server and response from server to client)
var server = http.createServer((req, res)=> {
    var srcStream = fs.createReadStream(fileToServe)

    //.pipe listens for data and end events from the fs.createReadStream()
    srcStream.pipe(res)

    // response headers: give detail information on response 
    res.writeHead(200, {'Content-Type' : 'application/json'}) 
})

// port the server will be listening at
server.listen(8000)

// confirmation on console that server is running
console.log ('Server listening at localhost:8000') 

// CTRL-C to terminate server at cmd prompt