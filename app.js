const express = require('express')
const app = express();
const router = require('./routes/tasks')
const connectedDb = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()
//middleware -used to access data in your routes

app.use(express.static('./public'))

app.use(express.json());
//routes

app.use('/api/v1/tasks', router)
app.use(notFound)


const port = 3000

const start = async () => {

    try {
        await connectedDb(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening  on port ${port}...`))
    } catch (error) {
        console.group('Error:', error)
    }
}



start()