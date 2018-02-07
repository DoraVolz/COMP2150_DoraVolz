const fs = require('fs')

// read from a file:
fs.readfile('./data.json', (error, data) => {
   if(error)
      return console.error(error)
   console.log(data)
})

// Create some JSON data
var data = ("name" : "Tom", "message" : "Hi!"}

// Write to a file:
fs.writeFile('./data.json', JSOM.stringify(data), (error) => {
   if(error)
      return console.error(error)
   console.log("file written successfully")
})
