const express  = require("express");
const RegisterTopicSchema = require('../model/RegisterTopicModel');

const router = express.Router();

//save submissiontype
router.post('/registerTopic/save', (req,res) => {
    let newRegisterTopic = new RegisterTopicSchema(req.body);
    newRegisterTopic.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Register topic saved successfully"
        })
    });
});

//get data
router.get('/allRegisterTopics', (req, res) => {
    RegisterTopicSchema.find().exec((err,registerTopic)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingSubmissionTypes: registerTopic
        });
    });
});

//update
router.put('/topic/update/:id', (req,res) => {
    RegisterTopicSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, registerTopic) => {
            if(err){
                return res.status(400).json({error:err})
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


//delete
router.delete('/topic/delete/:id', (req, res) => {
    RegisterTopicSchema.findByIdAndRemove(req.params.id).exec((err,deletedTopic) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedTopic
        });
    });
});

module.exports = router;