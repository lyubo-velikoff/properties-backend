const validate = require('../utils/validation')
const { param, body } = require('express-validator')

exports.create = validate([
    body('title').escape().trim().exists().isString(),
    body('description').escape().trim().optional().isString(),
    body('price').optional().isInt(),
    body('area').optional().isInt(),
    body('yard').optional().isInt(),
    body('regulation').optional().isInt(),
    body('phone').escape().trim().optional().isString(),
    body('currencyId').optional().isInt(),
])

exports.findOne = validate([
    param('propertyId').exists().isInt()
])

exports.update = validate([
    body('title').escape().trim().exists().isString(),
    body('description').escape().trim().optional().isString(),
    body('price').optional().isInt(),
    body('area').optional().isInt(),
    body('yard').optional().isInt(),
    body('regulation').optional().isInt(),
    body('phone').escape().trim().optional().isString(),
    body('currencyId').optional().isInt(),
])

exports.delete = validate([
    param('propertyId').exists().isInt()
])