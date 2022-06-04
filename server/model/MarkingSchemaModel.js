const mongoose = require("mongoose");

const MarkingSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    marks:{
        type: Number
    }
});

module.exports = mongoose.model('markingschema', MarkingSchema);