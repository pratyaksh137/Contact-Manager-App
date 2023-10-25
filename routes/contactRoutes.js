const express = require('express');
const router = express.Router();

router.route('/').get((req,resp)=>{
    resp.status(200).json({message:'Get All Contacts'})
});

router.route('/:id').get((req,resp)=>{
    console.log(req.params); //returns in object format
    resp.status(200).json({message:`Get contacts for id = ${req.params.id}`}) // returns only id 
});

router.route('/:id').post((req,resp)=>{
    resp.status(200).json({message:`Create a new contact for id = ${req.params.id}`});
});

router.route('/:id').put((req,resp)=>{
    resp.status(200).json({message:`Update contact for id = ${req.params.id}`});
});

router.route('/:id').delete((req,resp)=>{
    resp.status(200).json({message:`Deleting contact where id = ${req.params.id}`});
});

module.exports = router;