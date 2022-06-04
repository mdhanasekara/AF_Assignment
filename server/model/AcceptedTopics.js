const mongoose = require("mongoose");

const AcceptedTopicSchema = new mongoose.Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    Accept: {
        type: String
    },
    decline: {
        type: String
    }
});

module.exports = mongoose.model('AccpetedTopic', AcceptedTopicSchema);