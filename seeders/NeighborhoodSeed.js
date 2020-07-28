'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('neighborhood', [
            {
                name: 'Алеи Възраждане',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Басарбово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Веждата',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Възраждане',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Долапите',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Дружба 1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Дружба 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Дружба 3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Завод Найден Киров',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Захарна фабрика',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Здравец',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Здравец Изток',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Здравец Север 1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Здравец Север 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'КТМ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Мальовица',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Мидия Енос',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Нова промишлена зона',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Новата махала',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Промишлена зона - Запад',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Промишлена зона - Изток',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Родина 1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Родина 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Родина 3',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Родина 4',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Сарая',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Средна кула',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Товарна гара',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Тракцията',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Търговия на едро',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Хъшове',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Цветница',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Централен кооп. Пазар',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Централен южен район',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Център',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Чародейка - Север',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Чародейка - Юг',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Широк център',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ялта',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Д. Басарбовски',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Касева Чешма',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Кръста',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Кулата',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Левента',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Липака',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Русофили',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Средна кула',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'в.з. Трите гълъба',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Птицекомбинат',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Николово',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('neighborhood', null, {})
    }
}
