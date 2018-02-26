var http = require('http')

//const url = 'http://mockbin.com'

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
}).on('error', console.error)

//const http = require('http')

//http.get(url, (response) => {
 //  var my_data = ''
 //  response.on('data', (chunk) => {
 //     my_data += chunk
//   })
//   response.on('end', () => {
//      console.log(my_data)
 //  })
//}).on('error', (error) => {
//   console.error('Got error: ${error.message}')
//})
      