'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class PropertyPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            // PropertyPhoto.belongsTo(models.Photo)
            // PropertyPhoto.belongsTo(models.Property) //TODO: Sort out this association
        }
    };
    PropertyPhoto.init({
        propertyId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: {
                    tableName: 'property',
                },
                key: 'id'
            },
            allowNull: false
        },
        photoId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: {
                    tableName: 'photo',
                },
                key: 'id'
            },
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'PropertyPhoto',
        tableName: 'propertyPhoto',
        timestamps: false
    })
    return PropertyPhoto
}