const mongoose = require("mongoose");

const RegisterTopicSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('registerTopic', RegisterTopicSchema);