const express  = require("express");
const MarkingSchema = require('../model/MarkingSchemaModel');

const router = express.Router();

//save submissiontype
router.post('/markingSchema/save', (req,res) => {
    let newMarkingSchema = new MarkingSchema(req.body);
    newMarkingSchema.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"marking schema created successfully"
        })
    });
});

//get data
router.get('/allMarkingSchema', (req, res) => {
    newMarkingSchema.find().exec((err,markingschema)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingMarkingSchema: markingschema
        });
    });
});

//update
router.put('/markingschema/update/:id', (req,res) => {
    MarkingSchema.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, markingschema) => {
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
router.delete('/markingSchema/delete/:id', (req, res) => {
    MarkingSchema.findByIdAndRemove(req.params.id).exec((err,deletedMarkingSchema) => {
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccessfull", err
            });
        }
        return res.json({
            message:"Delete successfull", deletedMarkingSchema
        });
    });
});

module.exports = router;