const {Router} = require('express');
const router = Router();


const {all,create,update,remove} = require('../controllers/eventController');
const EventValidator = require('../validations/EventValidator');
const validatorFields = require('../middlewares/validationFields');
const validationJWT = require('../middlewares/validationJWT');


router
    .use(validationJWT)

/*api/events*/
router
    .get('/',all)
    .post('/',EventValidator,validatorFields,create)
    .put('/:id',update)
    .delete('/:id',remove)


module.exports = router;