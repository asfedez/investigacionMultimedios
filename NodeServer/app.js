const Express = require('express');
const BodyParser = require('body-parser');
const Mysql = require('mysql');
const cors = require('cors');

const app = Express();

/* Enable Cors */
app.use(cors());


/* Express Server Config */
app.set('port', process.env.port || 3000);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


/* Database Configuration */
const connection = Mysql.createConnection({
    hostname : 'localhost:8100',
    user     : 'root',
    password : '',
    database : 'multimediosdb'
});

connection.connect( function(err) {
    if(err){
        console.log(err);
    }else{
        console.log('conectado');
    }
});



/* Model */




/* Routes */
//Get
app.get("/api/incomes", (request, response) =>{
    try {
        connection.query('SELECT * FROM `income`', function (error, results, fields) {
            if (error) throw error;
            return response.send({results});
        });

    } catch (error) {
        response.status(500).send(error);
    }
})
//Get:id
app.get("/api/incomes/:id", (request, response) =>{
    try {
        let {id} = request.params;
        connection.query('SELECT * FROM income where id=?',id ,function (error, results, fields) {
            if (error) throw error;
            return response.send({results});
        });
    } catch (error) {
        response.status(500).send(error);
    }
})

//Post
app.post("/api/incomes", (request, response) =>{
    try {
        const income = request.body;
        connection.query('INSERT INTO income SET ?', income ,function (error, results, fields) {
            if (error) throw error;
            return response.send({results});
        });
        
    } catch (error) {
        response.status(500).send(error);
    }
})



app.listen(app.get('port'), ()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});