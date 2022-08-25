import express from 'express'
import cors from 'cors'
import 'dotenv/config'


class Server{

    app         : any
    port?       : String
    paths       : {}

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


export default Server