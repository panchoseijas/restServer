const User = require('../models/user');
const bcryptjs = require('bcryptjs');


const usuariosGet = (req, res) => {
    res.json({
        msg: 'api - get'
    })
}

const usuariosPost = async(req, res) => {
    const {nombre, password, mail, rol} = req.body
    const user = new  User({nombre, password, mail, rol});


    //Encriptar password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password,salt);


    await user.save();

    res.json({
        user,
    })
}

const usuariosPut = (req, res) => {
    res.json({
        msg: 'api - Put'
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'api - Delete'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}