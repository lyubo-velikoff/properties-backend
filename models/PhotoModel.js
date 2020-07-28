'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Photo.belongsToMany(models.Property, {
                through: models.PropertyPhoto,
                foreignKey: 'photoId'
            })
            Photo.hasMany(models.PropertyPhoto, { foreignKey: 'photoId' })
        }
    };
    Photo.init({
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Photo',
        tableName: 'photo'
    })
    return Photo
}