const http = require('http')

const url = 'http://mockbin.com'

http.get(url, (response) => {
   var my_data = ''
   response.on('data', (chunk) => {
      my_data += chunk
   })
   response.on('end', () => {
      console.log(my_data)
   })
}).on('error', (error) => {
   console.error('Got error: ${error.message}')
})
      