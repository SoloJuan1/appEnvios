require ('dotenv').config()

const Server = require('./models/server')
const objetoServer = new Server();

objetoServer.listen()