const db = require('../models')
const { getPagination, getPagingData } = require('../utils/pagination')
const { Property } = db
const Op = db.Sequelize.Op

exports.create = (req, res) => {
    const { title, description, price, area, yard, regulation, phone, currencyId } = req.body
    // Save Tutorial in the database
    Property.create({ title, description, price, area, yard, regulation, phone, currencyId })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).json({
                message: err.message || 'Some error occurred while creating the data.'
            })
        })
}

exports.findAll = (req, res) => {
    const { page, size, title } = req.query
    const { limit, offset } = getPagination(page, size)

    Property.findAndCountAll({
        limit,
        offset,
        // include: {
        //     model: PropertyPhoto,
        //     include: Property
        // }
    })
        .then(data => res.send(getPagingData(data)))
        .catch(err => {
            res.status(500).json({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

exports.findOne = (req, res) => {
    Property.findByPk(req.params.propertyId)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).json({
                message: err.message || 'Some error occurred while retrieving data.'
            })
        })
}

exports.update = (req, res) => {
    const { title, description, price, area, yard, regulation, phone, currencyId } = req.body
    Property.update({ title, description, price, area, yard, regulation, phone, currencyId }, { where : { id: req.params.propertyId } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => {
            res.status(500).json({
                message: err.message || 'Some error occurred while updating data.'
            })
        })
}

exports.delete = (req, res) => {
    Property.destroy({ where : { id: req.params.propertyId } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => {
            res.status(500).json({
                message: err.message || 'Some error occurred while deleting data.'
            })
        })
}

// Delete all Photo from the database.
exports.deleteAll = (req, res) => {

}