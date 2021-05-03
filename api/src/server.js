const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

console.log("rodando")
app.listen(5555)