'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('category', [
            {
                name: 'Апартаменти',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Вили',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Гараж | Парко място',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Двустайни',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Едностайни',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Заведения',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Земеделска земя',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Къщи',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Магазини',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Наеми',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Офиси',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Парцели',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Продажби',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Пром. помещения',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Топ Оферти',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Тристайни',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('category', null, {})
    }
}
