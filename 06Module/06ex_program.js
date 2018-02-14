var myModule = require('./06ex_module.js')

var dirPath = 'C:/Users/Dora/Documents'
var ext = 'xlsx'

myModule(dirPath, ext, (error, files) => {
    if(error)
        console.log(error)

    files.forEach(element => {
       console.log(element) 
    });
})