const express = require('express')
const cors = require('cors')
const router = require('./router/index')

const PORT = 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
}

start()