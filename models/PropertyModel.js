'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Property.belongsToMany(models.Photo, {
                through: models.PropertyPhoto,
                foreignKey: 'propertyId'
            })
            Property.hasMany(models.PropertyPhoto, { foreignKey: 'propertyId' })
        }
    };
    Property.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        area: {
            type: DataTypes.INTEGER
        },
        yard: {
            type: DataTypes.INTEGER
        },
        regulation: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        phone: {
            type: DataTypes.STRING,
            defaultValue: '0895 606 165'
        },
        currencyId: {
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
            type: DataTypes.INTEGER,
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
    }, {
        sequelize,
        modelName: 'Property',
        tableName: 'property'
    })
    return Property
}