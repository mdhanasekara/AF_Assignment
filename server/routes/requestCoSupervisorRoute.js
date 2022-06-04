const express  = require("express");
const CoSupervisorSchema = require('../model/CoSupervisor');

const router = express.Router();

//save submissiontype
router.post('/requestCoSupervisor/save', (req,res) => {
    let newRequestCoSupervisor = new CoSupervisorSchema(req.body);
    newRequestCoSupervisor.save((err) => {
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
router.get('/allcoSupervisors', (req, res) => {
    CoSupervisorSchema.find().exec((err,coSupervisor)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingCoSupervisor: coSupervisor
        });
    });
});

//update
router.put('/cosupervisor/update/:id', (req,res) => {
    CoSupervisorSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, coSupervisor) => {
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
router.delete('/cosupervisor/delete/:id', (req, res) => {
    CoSupervisorSchema.findByIdAndRemove(req.params.id).exec((err,deletedCoSupervisor) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedCoSupervisor
        });
    });
});

module.exports = router;