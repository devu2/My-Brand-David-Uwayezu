const mongoose = require('mongoose');

const querySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subject:    {
        type: String,

    },
    message: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Query',querySchema);