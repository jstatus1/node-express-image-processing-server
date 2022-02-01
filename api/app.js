const express = require('express')
const path = require('path')


const app = express()
const pathToIndex = path.resolve(__dirname, '../client/index.html');

//C:\Users\Johnson Tran\Documents\Projects\Node Projects\node-express-image-processing-server\api\index.js

app.use('/*', (request, response) => {
    console.log(__dirname)
    response.sendFile(pathToIndex)
})

module.exports = app


