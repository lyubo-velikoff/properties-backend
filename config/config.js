require('dotenv').config('../.env')
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env
module.exports = {
    local: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: 'mariadb',
        define: {
            charset: 'utf8',
            freezeTableName: true,
            dialectOptions: {
                collate: 'utf8_general_ci'
            }
        }
    },
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: 'mysql',
        define: {
            charset: 'utf8',
            freezeTableName: true,
            dialectOptions: {
                collate: 'utf8_general_ci'
            }
        }
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: 'mariadb',
        logging: false,
        define: {
            charset: 'utf8',
            freezeTableName: true,
            dialectOptions: {
                collate: 'utf8_general_ci'
            }
        }
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        host: DB_HOST,
        dialect: 'mariadb',
        define: {
            charset: 'utf8',
            freezeTableName: true,
            dialectOptions: {
                collate: 'utf8_general_ci'
            }
        }
    }
}