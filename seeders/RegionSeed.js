'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('region', [
            {
                name: 'главен път Е85',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Борово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Бяла',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Ветово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Глоджево',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Две могили',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Мартен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Сеново',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'гр. Сливо поле',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Бабово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Баниска',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Басарбово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Батин',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Батишница',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Белцов',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Беляново',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Бистренци',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Божичен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Борисово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Босилковци',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Ботров',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Брестовица',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Бръшлен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Бъзовец',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Бъзън',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Волово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Голямо Враново',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Горно Абланово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Джулюница',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Долна Студена',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Долно Абланово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Дряновец',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Екзарх Йосиф',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Иваново',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Караманово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Каран Върбовка',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Кацелово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Копривец',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Кошарна',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Кошов',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Красен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Кривина',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Кривня',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Лом Черковна',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Малко Враново',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Мечка',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Могилино',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Николово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Нисово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Новград',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Ново село',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Обретеник',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Острица',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Пейчиново',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Пепелина',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Пет кладенци',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Пиперково',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Пиргово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Писанец',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Полско Косово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Помен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Просена',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Ряхово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Сандрово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Сваленик',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Семерджиево',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Смирненски',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Стамболово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Стърмен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Табачка',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Тетово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Тръстеник',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Хотанца',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Ценово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Церовец',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Червен',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Червена вода',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Черешово',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Чилнов',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Широково',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Щръклево',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Юделник',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'с. Ястребово',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {})
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('region', null, {})
    }
}
