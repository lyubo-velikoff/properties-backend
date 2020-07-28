'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('detail', [
            {
                name: 'ТЕЦ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Газ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Климатик',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Локално парно',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'В строеж',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'С преход',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Асансьор',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Гараж',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Паркинг',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'С действащ бизнес',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Видео наблюдение',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Охрана',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Саниран',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Тераса',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('detail', null, {})
    }
}
