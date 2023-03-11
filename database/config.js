// require('dotenv').config();
const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODBATLAS);

    } catch (error) {
        console.log(error);
        // throw new Error('Error en la conexion con la base de datos')
    }

}

module.exports = {
    dbConnection
}