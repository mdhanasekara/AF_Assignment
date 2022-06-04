const express  = require("express");
const SubmissionTypeModel = require('../model/SubmissionTypeModel');

const router = express.Router();

//save submissiontype
router.post('/submissionType/save', (req,res) => {
    let newSubmissionType = new SubmissionTypeModel(req.body);
    newSubmissionType.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"submission type saved successfully"
        })
    });
});

//get data
router.get('/allSubmissionTypes', (req, res) => {
    SubmissionTypeModel.find().exec((err,submissiontypes)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingSubmissionTypes: submissiontypes
        });
    });
});

//update
router.put('/submissionType/update/:id', (req,res) => {
    SubmissionTypeModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, submissiontypes) => {
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
router.delete('/submissionType/delete/:id', (req, res) => {
    SubmissionTypeModel.findByIdAndRemove(req.params.id).exec((err,deletedSubmission) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedSubmission
        });
    });
});

module.exports = router;