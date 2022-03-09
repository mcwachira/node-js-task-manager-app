const mongoose = require('mongoose');

const connectedDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,

    })
}

module.exports = connectedDb;


// .then(() => console.log('connected to the db...')).catch((err) => console.log('Error:', err))