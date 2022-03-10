const express = require('express')
const app = express();
const router = require('./routes/tasks')
const notFound = require('./middleware/not-found')
require('dotenv').config()
const connectedDb = require('./db/connect')
//middleware -used to access data in your routes

app.use(express.static('./public'))

app.use(express.json());
//routes

app.use('/api/v1/tasks', router)
app.use(notFound)


const port = process.env.port || 3000

const start = async () => {

    try {
        await connectedDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening  on port ${port}...`))
    } catch (error) {
        console.group('Error:', error)
    }
}



start()