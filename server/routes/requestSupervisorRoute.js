const express  = require("express");
const SupervisorSchema = require('../model/SupervisorModel');

const router = express.Router();

//save submissiontype
router.post('/requestSupervisor/save', (req,res) => {
    let newRequestSupervisor = new SupervisorSchema(req.body);
    newRequestSupervisor.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Request saved successfully"
        })
    });
});

//get data
router.get('/allSupervisors', (req, res) => {
    SupervisorSchema.find().exec((err,supervisor)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingSupervisor: supervisor
        });
    });
});

//update
router.put('/supervisor/update/:id', (req,res) => {
    SupervisorSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, supervisor) => {
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
router.delete('/supervisor/delete/:id', (req, res) => {
    SupervisorSchema.findByIdAndRemove(req.params.id).exec((err,deletedSupervisor) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedSupervisor
        });
    });
});

module.exports = router;