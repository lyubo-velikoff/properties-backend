const validate = require('../utils/validation')
const { param, body } = require('express-validator')

exports.create = validate([
    body('url').trim().exists().isString()
])

exports.assign = validate([
    body('photoId').exists().isInt(),
    body('propertyId').exists().isInt(),
])

exports.findOne = validate([
    param('photoId').exists().isInt()
])

exports.update = validate([
    param('photoId').exists().isInt(),
    body('url').trim().exists().isString()
])

exports.delete = validate([
    param('photoId').exists().isInt()
])