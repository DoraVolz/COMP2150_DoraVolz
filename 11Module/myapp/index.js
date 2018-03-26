const express = require('express') // calling module
const app = express()// make app be an express object

app.get('/', (req, res) => {
    res.send('Hello there!')
    res.end()
})

app.listen(8000, () => {
    console.log('App is listening on port 8000.') // assign port 8000 for app to listen
})
