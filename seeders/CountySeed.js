'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('county', [
            {
                name: 'гр. Русе',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Област Русе',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('county', null, {})
    }
}
