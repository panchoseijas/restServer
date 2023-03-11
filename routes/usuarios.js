const {check} = require('express-validator');
const { Router } = require('express');
const { usuariosGet,usuariosPost, usuariosDelete,usuariosPut } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet);

router.post('/', [
    check('mail', 'Mail no valido').isEmail()
], usuariosPost);

router.put('/', usuariosPut);

router.delete('/', usuariosDelete);


module.exports = router;





