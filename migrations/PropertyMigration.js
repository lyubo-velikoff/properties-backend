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
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'currency',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            countyId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'county',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            regionId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'region',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            neighborhoodId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'neighborhood',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            floorId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'floor',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            floorCountId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'floorCount',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            constructionTypeId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'constructionType',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            detailId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'detail',
                        schema: 'avalon'
                    },
                    key: 'id'
                },
                allowNull: true
            },
            detailPlotId: {
                type: Sequelize.INTEGER,
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                references: {
                    model: {
                        tableName: 'detailPlot',
                        schema: 'avalon'
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
