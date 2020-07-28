'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('detailPlot', [
            {
                name: 'Ток',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Вода',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ограда',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Асвалтов път',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Черен път',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('detailPlot', null, {})
    }
}
