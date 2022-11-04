const {Router} = require('express');
const { GetDetallesEnvios,PostDetallesEnvios,PutDetallesEnvios,DeleteDetallesEnvios} = require('../controllers/detallesEnvios');
const ruta1='/detalleenvios'
const router=Router();

router.get(ruta1,GetDetallesEnvios)
router.post(ruta1,PostDetallesEnvios)
router.put(ruta1,PutDetallesEnvios)
router.delete(ruta1,DeleteDetallesEnvios)

module.exports=router