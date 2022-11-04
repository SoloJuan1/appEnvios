const {Router} = require('express');
const { GetPaquetes,PostPaquetes,PutPaquetes, DeletePaquetes } = require('../controllers/paquetes');
const ruta3='/paquetes'
const router=Router();

router.get(ruta3,GetPaquetes)
router.post(ruta3,PostPaquetes)
router.put(ruta3,PutPaquetes)
router.delete(ruta3,DeletePaquetes)

module.exports=router