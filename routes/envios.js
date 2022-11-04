const {Router} = require('express');
const { GetEnvios,PostEnvios,PutEnvios,DeleteEnvios } = require('../controllers/envios');
const ruta2='/envios'
const router=Router();

router.get(ruta2,GetEnvios)
router.post(ruta2,PostEnvios)
router.put(ruta2,PutEnvios)
router.delete(ruta2,DeleteEnvios)

module.exports=router