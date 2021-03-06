'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('property', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            area: {
                type: Sequelize.INTEGER
            },
            yard: {
                type: Sequelize.INTEGER
            },
            regulation: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            phone: {
                type: Sequelize.STRING,
                defaultValue: '0895 606 165'
            },
            currencyId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'currency',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            countyId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'county',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            regionId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'region',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            neighborhoodId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'neighborhood',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            floorId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'floor',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            floorCountId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'floorCount',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            constructionTypeId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'constructionType',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            detailId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'detail',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            detailPlotId: {
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'detailPlot',
                    },
                    key: 'id'
                },
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }, {
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        })
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('property')
    }
}
