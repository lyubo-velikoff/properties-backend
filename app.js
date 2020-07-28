const express = require('express')
const bodyParser = require('body-parser')
const IndexRouter = require('./routes/index')
const db = require('./models')
const cors = require('cors')
const PORT = 3001
const app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', IndexRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))
})
