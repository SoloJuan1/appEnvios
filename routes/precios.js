const {Router} = require('express');
const { GetPrecios,PostPrecios,PutPrecios, DeletePrecios } = require('../controllers/precios');
const ruta4='/precios'
const router=Router();

router.get(ruta4,GetPrecios)
router.post(ruta4,PostPrecios)
router.put(ruta4,PutPrecios)
router.delete(ruta4,DeletePrecios)


module.exports=router