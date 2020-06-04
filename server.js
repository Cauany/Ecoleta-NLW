const express = require('express')
const api = express()

api.use(express.static('public'))


api.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})


api.listen('3000', (req, res) =>{
    console.log('It is running!')
})