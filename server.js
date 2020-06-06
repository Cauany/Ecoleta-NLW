const express = require('express')
const nunjucks = require('nunjucks')
const api = express()

const db = require('./src/database/db')

api.use(express.static('public'))

//habilitar o uso do req.body
api.use(express.urlencoded({ extended: true }))

nunjucks.configure('src', {
    express: api,
    noCache: true
})

api.get('/', (req, res) => {
    res.render('index.html')
})

api.get('/create-point', (req,res) => {

    console.log(req.query)

    res.render('create-point.html')
})

api.post('/create-point', (req, res) => {

    const query = `INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);`

    const values = [ 
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send('Erro no cadastro')
        }
        console.log('Cadastrado com sucesso')
        console.log(this)
        return res.render('create-point.html', { saved: true })
    }
    db.run(query, values, afterInsertData)
})

api.get('/search', (req,res) => {

    const search = req.query.search

    if(search == ''){
        return res.render('search-results.html', { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }
        
        const total = rows.length
        return res.render('search-results.html', { places: rows, total })
    })

    

})

api.listen('3000', (req, res) =>{
    console.log('It is running!')
})