var fs = require('fs')  //import module fs
var path = require('path')  //import module path
var list = []

module.exports = function(directory, extension, callback) {
    var extn = '.' + extension

    fs.readdir(directory, (err, fileArr) => {
        if(err)
            return callback(err)

            fileArr.forEach(file => {
                if(path.extname(file) === extn)
                list.push(file)
            })
        callback(null, list)
    })
}