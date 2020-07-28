const express = require('express')
const { PhotoController } = require('../controllers')
const { PhotoValidation } = require('../validations')
const router = express.Router()

router.post('/', PhotoValidation.create, PhotoController.create)
router.post('/assign', PhotoValidation.assign, PhotoController.assign)
router.get('/', PhotoController.findAll)
router.get('/:photoId', PhotoValidation.findOne, PhotoController.findOne)
router.put('/:photoId', PhotoValidation.update, PhotoController.update)
router.delete('/:photoId', PhotoValidation.delete, PhotoController.delete)

module.exports = router