'use strict'
const fs = require('fs')
const path = require('path')
const ModelMiddleware = require('../middlewares/ModelMiddleware')
const basename = path.basename(__filename)
const express = require('express')
const router = express.Router()
const routes = {}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
        const route = require(path.join(__dirname, file))
        routes[file.replace('.js', '')] = route
    })

router.use('/properties', routes.PropertyRouter)
router.use('/photos', routes.PhotosRouter)
router.use('/categories', ModelMiddleware('Category'), routes.CustomListRouter)
router.use('/neighborhoods', ModelMiddleware('Neighborhood'), routes.CustomListRouter)
router.use('/regions', ModelMiddleware('Region'), routes.CustomListRouter)
router.use('/constructionTypes', ModelMiddleware('ConstructionType'), routes.CustomListRouter)
router.use('/counties', ModelMiddleware('County'), routes.CustomListRouter)
router.use('/currencies', ModelMiddleware('Currency'), routes.CustomListRouter)
router.use('/details', ModelMiddleware('Detail'), routes.CustomListRouter)
router.use('/detailsPlot', ModelMiddleware('DetailPlot'), routes.CustomListRouter)
router.use('/floors', ModelMiddleware('Floor'), routes.CustomListRouter)
router.use('/floorsCount', ModelMiddleware('FloorCount'), routes.CustomListRouter)
router.use('/furnished', ModelMiddleware('Furnished'), routes.CustomListRouter)

module.exports = router