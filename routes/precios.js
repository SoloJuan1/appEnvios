const {Router} = require('express')
const {
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios    
} = require('../controllers/precios');

const router=Router();

router.get('/',GetPrecios)
router.post('/',PostPrecios)
router.put('/',PutPrecios)
router.delete('/',DeletePrecios)


module.exports=router