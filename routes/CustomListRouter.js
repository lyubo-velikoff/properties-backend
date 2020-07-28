const express = require('express')
const { CustomListController } = require('../controllers')
const { CustomListValidation } = require('../validations')
const router = express.Router()

router.post('/', CustomListValidation.create, CustomListController.create)
router.get('/', CustomListController.findAll)
router.get('/:id', CustomListValidation.findOne, CustomListController.findOne)
router.put('/:id', CustomListValidation.update, CustomListController.update)
router.delete('/:id', CustomListValidation.delete, CustomListController.delete)

module.exports = router