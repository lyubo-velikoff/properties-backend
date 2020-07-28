const express = require('express')
const { PropertyController } = require('../controllers')
const { PropertyValidation } = require('../validations')
const router = express.Router()

router.post('/', PropertyValidation.create, PropertyController.create)
router.get('/', PropertyController.findAll)
router.get('/:propertyId', PropertyValidation.findOne, PropertyController.findOne)
router.put('/:propertyId', PropertyValidation.update, PropertyController.update)
router.delete('/:propertyId', PropertyValidation.delete, PropertyController.delete)

module.exports = router