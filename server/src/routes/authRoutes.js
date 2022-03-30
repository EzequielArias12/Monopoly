const { Router } = require('express');
const router = Router();
const { userCreate, userLogin } = require('../controllers/authController');
const registerValidator = require('../validations/registerValidation');
const validationFields = require('../middlewares/validationFields');
const authValidator = require('../validations/authValidator');



router
.post('/',authValidator,validationFields,userLogin);

/* api/auth */
router
  .post('/new',registerValidator,validationFields,userCreate );



module.exports = router;
