const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,

        //ann array is used for custom messages
        required: [true, 'Please enter a name'],
        maxLength: [20, 'maximum length of the string should be 20']
    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Task', TaskSchema);