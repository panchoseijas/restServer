
const usuariosGet = (req, res) => {
    res.json({
        msg: 'api - get'
    })
}

const usuariosPost = (req, res) => {
    const {id} = req.body

    res.json({
        msg: 'api - Post',
        id
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