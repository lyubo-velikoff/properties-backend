# Properties Backend

Node JS backend using express, express-validator, sequelize, sequelize-cli and jest

![Node.js CI](https://github.com/lyubo-velikoff/properties-backend/workflows/Node.js%20CI/badge.svg)

## How to run

1. Install dependencies
```
npm install
```

1. Copy .env.example into .env and fill in details

1. Copy config/config.json.example into config/config.json and fill in details

1. Run commands
```
node_modules\.bin\sequelize-cli db:migrate
node_modules\.bin\sequelize-cli db:seed:all
node app
// if no errors your server is listening at 3001 (or depending what u configured in .env)
```

## Sequelize cli commands

Run migration
```
node_modules\.bin\sequelize-cli db:migrate
```

Run specific seed
```
node_modules\.bin\sequelize-cli db:seed --seed CurrencySeed.js
```

```
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file                                                                                                                         [aliases: migration:create]  sequelize model:generate                    Generates a model and its migration                                                                                                                        [aliases: model:create]  sequelize seed:generate                     Generates a new seed file 
```
