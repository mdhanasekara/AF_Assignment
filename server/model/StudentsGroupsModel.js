const mongoose = require("mongoose");

const StudentGroupsSchema = new mongoose.Schema({
    groupName:{
        type: String,
        required: true
    },
    student1Name:{
        type: String,
        required: true
    },
    student1Number:{
        type: String,
        required: true
    },
    student1Email:{
        type: String,
        required: true
    },
    student1Contact:{
        type: Number
    },
    student2Name:{
        type: String,
        required: true
    },
    student2Number:{
        type: String,
        required: true
    },
    student2Email:{
        type: String,
        required: true
    },
    student2Contact:{
        type: Number
    },
    student3Name:{
        type: String,
        required: true
    },
    student3Number:{
        type: String,
        required: true
    },
    student3Email:{
        type: String,
        required: true
    },
    student3Contact:{
        type: Number
    },
    student4Name:{
        type: String,
        required: true
    },
    student4Number:{
        type: String,
        required: true
    },
    student4Email:{
        type: String,
        required: true
    },
    student4Contact:{
        type: Number
    },
});

module.exports = mongoose.model('studentGroups', StudentGroupsSchema);