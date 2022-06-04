const mongoose = require("mongoose");

const PannelModel = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    pannel:{
        type: String
    }
});

module.exports = mongoose.model('pannel', PannelModel);