'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('currency', [
            {
                sign: 'лв.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                sign: '€',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('currency', null, {})
    }
}
