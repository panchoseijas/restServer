const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido']
    },
    mail: {
        type: String,
        require: [true, 'El mail es requerido'],
        unique: true,
    },
    password: {
        type: String,
        require: [true,'Contrasena requerida'],
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        defautl: false,
    }
})

module.exports = model('User' , UserSchema );