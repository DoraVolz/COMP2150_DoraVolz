var fs = require('fs')

var file = process.argv[2]

fs.readFile(file,'utf-8', (err, myData) => {
    if(err) 
        console.error(err)

    var strArr = myData.split('\n')

    var totalLines = strArr.length - 1
    console.log(totalLines)
})