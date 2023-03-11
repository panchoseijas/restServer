const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/home/usuarios';

        // Conectar DB
        this.database();

        // middlewares
        this.middlewares();

        // Rutas
        this.routes();

    }

    async database(){
        await dbConnection();

        console.log('conectada');
    }

    middlewares() {
        
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static( 'public' ) );

    }

    routes(){
        this.app.use(this.usuariosPath , require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('puerto: ',this.port);
        })
    }
}


module.exports = Server