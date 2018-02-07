var http = require('http')

// Create a server using http methods that you imported
// The server will listen on port 3000
http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write('<h1>Ground control to major Tom</h1>')
   res.end()
}).listen(3000)