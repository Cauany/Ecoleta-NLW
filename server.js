const express = require('express')
const nunjucks = require('nunjucks')
const api = express()

api.use(express.static('public'))

nunjucks.configure('src', {
    express: api,
    noCache: true
})

api.get('/', (req, res) => {
    res.render('index.html')
})

api.get('/create-point', (req,res) => {
    res.render('create-point.html')
})

api.get('/search', (req,res) => {
    res.render('search-results.html')
})

api.listen('3000', (req, res) =>{
    console.log('It is running!')
})