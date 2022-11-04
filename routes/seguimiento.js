const {Router} = require('express')
const { GetSeguimiento,PostSeguimiento,PutSeguimiento, DeleteSeguimiento } = require('../controllers/seguimiento');
const ruta5='/seguimiento'
const router=Router();

router.get(ruta5,GetSeguimiento ) 
router.post(ruta5,PostSeguimiento)
router.put(ruta5,PutSeguimiento)
router.delete(ruta5,DeleteSeguimiento)


module.exports=router