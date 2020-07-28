const app = require('./app')
const db = require('./models')
const PORT = 3001

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
})
