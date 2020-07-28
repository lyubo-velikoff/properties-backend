const db = require('../models')
const { getPagination, getPagingData } = require('../utils/pagination')

const handleError = (err, res) => {
    res.status(500).json({
        message: err.message || 'Some error occurred'
    })
}

exports.create = (req, res) => {
    const Model = db[req.modelName]
    const { name } = req.body
    Model.create({ name })
        .then(data => res.send(data))
        .catch(err => handleError(err, res))
}

exports.findAll = (req, res) => {
    const Model = db[req.modelName]
    const { page, size, title } = req.query
    const { limit, offset } = getPagination(page, size)

    Model.findAndCountAll({
        limit,
        offset,
    })
        .then(data => res.send(getPagingData(data)))
        .catch(err => handleError(err, res))
}

exports.findOne = (req, res) => {
    const Model = db[req.modelName]
    Model.findByPk(req.params.id)
        .then(data => res.send(data))
        .catch(err => handleError(err, res))
}

exports.update = (req, res) => {
    const Model = db[req.modelName]
    const { name } = req.body
    Model.update({ name }, { where : { id: req.params.id } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => handleError(err, res))
}

exports.delete = (req, res) => {
    const Model = db[req.modelName]
    Model.destroy({ where : { id: req.params.id } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => handleError(err, res))
}

exports.deleteAll = (req, res) => {

}