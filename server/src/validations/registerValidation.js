const { check } = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMessage('el nombre es obligatorio'),

    check('email')
    .notEmpty().withMessage('el email es obligatorio')
    .isEmail().withMessage('el email debe ser valido'),

    check('password')
    .notEmpty().withMessage('la contraseña es obligatorio')
    .isLength({min:6}).withMessage('minimo 6 caracteres')
]