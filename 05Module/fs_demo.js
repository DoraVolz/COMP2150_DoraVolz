var fs = require('fs')

// read from a file
fs.readFile('./data.json', (err,data) => {
    if(err)
    return console.error(err) // return error if can't read from the file
    console.log(JSON.parse(data)); // log the file contents to the console if all is OK.
})

// create sample data in JSON to be written to a file
var myData = {
    "name":"Jane",
    "message":"Hi there!"
}

// write to a file
fs.writeFile('./data.json',JSON.stringify(myData), (error) => {
    if(error)
    return console.error(error)
    console.log('File written successfully')
})