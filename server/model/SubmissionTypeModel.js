const mongoose = require("mongoose");

const SubmissionTypeSchema = new mongoose.Schema({
    name:{
        type: String
    },
    type:{
        type: String
    }
});

module.exports = mongoose.model('SubmissionTypes', SubmissionTypeSchema);