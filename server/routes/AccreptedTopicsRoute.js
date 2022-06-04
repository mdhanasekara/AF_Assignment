const express  = require("express");
const AcceptedTopicSchema = require('../model/AcceptedTopics');

const router = express.Router();

//save submissiontype
router.post('/registerTopic/save', (req,res) => {
    let newAcceptTopic = new AcceptedTopicSchema(req.body);
    newAcceptTopic.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"accepted topic saved successfully"
        })
    });
});
module.exports = router;