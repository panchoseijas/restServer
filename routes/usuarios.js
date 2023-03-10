const { Router } = require('express');
const { usuariosGet,usuariosPost, usuariosDelete,usuariosPut } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet);

router.put('/', usuariosPut);

router.delete('/', usuariosDelete);

router.post('/', usuariosPost);

module.exports = router;





