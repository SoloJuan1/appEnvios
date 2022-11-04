const express = require('express')
const port = process.env.PORT

class Server{
    app = express()
    port = process.env.PORT
    constructor(){ 
        this.routes();
    }

    routes(){
        this.app.use('',require('../routes/precios'))
        this.app.use('',require('../routes/paquetes'))
        this.app.use('',require('../routes/envios'))
        this.app.use('',require('../routes/detalleEnvios'))
        this.app.use('',require('../routes/seguimiento'))
    }

    listen(){
        this.app.listen(process.env.PORT,() =>
        console.log(`El puerto esta corriendo el puerto TCP: ${this.port}`))       
    }
}

module.exports = Server;