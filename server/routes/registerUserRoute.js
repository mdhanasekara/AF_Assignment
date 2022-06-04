const express  = require("express");
const Register = require('../model/Register');

const router = express.Router();

//save submissiontype
router.post('/user/save', (req,res) => {
    let newRegisterUser = new Register(req.body);
    newRegisterUser.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Registeration completed successfully"
        })
    });
});

//get data
router.get('/allUsers', (req, res) => {
    Register.find().exec((err,users)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingUsers: users
        });
    });
});

//update
router.put('/users/update/:id', (req,res) => {
    Register.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, users) => {
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
router.delete('/users/delete/:id', (req, res) => {
    Register.findByIdAndRemove(req.params.id).exec((err,deletedUsers) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedUsers
        });
    });
});

module.exports = router;