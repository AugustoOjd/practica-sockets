const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT


        this.paths = {

        }

        // this.conectarDB()

        this.middleware()

        this.routes()

    }


    middleware(){

        this.app.use( cors() )
    }


    routes(){

    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Servidor conectado en puerto', this.port)
        })
    }

}


module.exports = Server