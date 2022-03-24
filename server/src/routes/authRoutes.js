const { Router } = require('express');
const router = Router();
const { userCreate } = require('../controllers/authController');
const registerValidator = require('../validations/registerValidation');
const validationFields = require('../middlewares/validationFields');

/* api/auth */
router
  .post('/',
    registerValidator,
    validationFields,
    userCreate );

module.exports = router;
