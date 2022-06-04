const mongoose = require("mongoose");

const CoSupervisorSchema = new mongoose.Schema({
    name:{
        type: String
    },
    topic:{
        type: String
    },
    description:{
        type: String
    },
    assignedName:{
        type: String
    }
});

module.exports = mongoose.model('coSupervisor', CoSupervisorSchema);