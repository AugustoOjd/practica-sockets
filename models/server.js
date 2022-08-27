const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app    = express()
        this.port   = process.env.PORT
        this.server = require('http').createServer(this.app)
        this.io     = require('socket.io')(this.server)


        this.paths = {

        }

        // this.conectarDB()

        this.middleware()

        this.routes()

        this.sockets()

    }


    middleware(){

        this.app.use( cors() )

        this.app.use(express.static('public'))
    }


    routes(){

    }

    sockets(){

        this.io.on('connection', socket =>{
            console.log('Cliente conectado', socket.id)

        })
    }


    listen(){
        this.server.listen( this.port, ()=>{
            console.log('Servidor conectado en puerto', this.port)
        })
    }

}


module.exports = Server