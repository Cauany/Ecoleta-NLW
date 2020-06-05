const sqlite = require('sqlite3').verbose()

//Iniciando um objeto que fará operações no BD
const db = new sqlite.Database('./src/database/database.db')

//Utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // const query = `INSERT INTO places(
    //     image,
    //     name,
    //     address,
    //     address2,
    //     state,
    //     city,
    //     items
    // ) VALUES (?,?,?,?,?,?,?);`

    // const values = [ 
    //     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    //     "Colectoria",
    //     "Guilherme Gemballa, Jardim América",
    //     "Número 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Resíduos Eletrônicos, Lâmpadas"
    // ]

    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log('Cadastrado com sucesso')
    //     console.log(this)
    // }

    //db.run(query, values, afterInsertData)

    // db.all(` SELECT * FROM places`, function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log('Aqui estão seus registros')
    //     console.log(rows)
    // })

    // db.run(` DELETE FROM places WHERE id = ?`, [6], function(err){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log('Registros deletado com sucesso')
    
    // })
})

module.exports = db