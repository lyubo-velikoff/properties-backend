'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('floorCount', [
            {
                name: '-2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '-1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Партер',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '4',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '5',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '6',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '7',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '8',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '9',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '10',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '11',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '12',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '13',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '14',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: '15',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('floorCount', null, {})
    }
}
