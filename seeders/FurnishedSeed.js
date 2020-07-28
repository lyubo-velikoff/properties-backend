'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('furnished', [
            {
                name: 'Пълно',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Частично',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Необзаведен',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('furnished', null, {})
    }
}
