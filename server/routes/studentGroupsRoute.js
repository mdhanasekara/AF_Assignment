const express  = require("express");
const StudentGroupsSchema = require('../model/StudentsGroupsModel');

const router = express.Router();

//save submissiontype
router.post('/studentGroupsSchema/save', (req,res) => {
    let newStudentGroupsSchema = new StudentGroupsSchema(req.body);
    newStudentGroupsSchema.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Student Group created successfully"
        })
    });
});

//get data
router.get('/allStudentGroups', (req, res) => {
    newStudentGroupsSchema.find().exec((err,studentGroupsSchema)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingStudentGroupSchema: studentGroupsSchema
        });
    });
});

//update
router.put('/studentGroupSchema/update/:id', (req,res) => {
    StudentGroupsSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, studentGroupSchema) => {
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
router.delete('/studentGroupSchema/delete/:id', (req, res) => {
    StudentGroupsSchema.findByIdAndRemove(req.params.id).exec((err,deletedStudentGroup) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedStudentGroup
        });
    });
});

module.exports = router;