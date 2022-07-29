const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.usuariosPath = '/api/users';

        //Middlewares: funciones que se ejecutan cuando arrance el servidor
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        //CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use(express.json());

        //Direcctorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, () =>{
        console.log("Servidor corriendo en puerto", this.port);
        });
    }
}

module.exports = Server;