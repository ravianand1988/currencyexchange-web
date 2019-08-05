const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 5001

app.listen(port)

console.log(`currencyexchange-web is lisetening on port: ${port}`)
