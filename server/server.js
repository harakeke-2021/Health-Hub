const path = require('path')
const express = require('express')


const server = express()
const router = express.Router()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

router.get('/', (res, req) => {
    res.send('inside of browser')
})

module.exports = server
