require('dotenv').config()
const port = process.env.PORT;
const Server =require('./models/server');

const server = new Server();

server.listen();
