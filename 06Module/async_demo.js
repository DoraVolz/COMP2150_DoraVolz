var fs = require('fs')

var myNumber = undefined
//var myNumber = 1  //naming a variable

function addOne(callback) {
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        myNumber = parseInt(fileContents)
        myNumber++
        callback()
    })  //function adding one.
}

function logMyNumber(){
    console.log(myNumber)
}

addOne(logMyNumber)