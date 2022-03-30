const { check } = require('express-validator');

module.exports = [
   
    check('email')
    .notEmpty().withMessage('el email es obligatorio')
    .isEmail().withMessage('el email debe ser valido'),

    check('password')
    .notEmpty().withMessage('la contraseña es obligatorio')
    
]