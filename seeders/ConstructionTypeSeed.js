'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('constructionType', [
            {
                name: 'Тухла',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'ЕПК',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'ПК',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Панел',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Гредоред',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('constructionType', null, {})
    }
}
