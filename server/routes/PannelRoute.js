const express  = require("express");
const PannelModel = require('../model/PanelModel');

const router = express.Router();

//save 
router.post('/addPannel/save', (req,res) => {
    let newPannel = new PannelModel(req.body);
    newPannel.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Pannel saved successfully"
        })
    });
});

//get data
router.get('/allPanels', (req, res) => {
    PannelModel.find().exec((err,pannel)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingPannel: pannel
        });
    });
});

//update
router.put('/pannel/update/:id', (req,res) => {
    PannelModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, pannel) => {
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
router.delete('/pannel/delete/:id', (req, res) => {
    RegisterTopicSchema.findByIdAndRemove(req.params.id).exec((err,deletedPannel) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedPannel
        });
    });
});

module.exports = router;