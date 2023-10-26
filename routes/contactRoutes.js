const express = require('express');
const router = express.Router();

// router.route('/').get((req,resp)=>{
//     resp.status(200).json({message:'Get All Contacts'})
// });

// router.route('/:id').get((req,resp)=>{
//     console.log(req.params); //returns in object format
//     resp.status(200).json({message:`Get contacts for id = ${req.params.id}`}) // returns only id 
// });

// router.route('/:id').post((req,resp)=>{
//     resp.status(200).json({message:`Create a new contact for id = ${req.params.id}`});
// });

// router.route('/:id').put((req,resp)=>{
//     resp.status(200).json({message:`Update contact for id = ${req.params.id}`});
// });

// router.route('/:id').delete((req,resp)=>{
//     resp.status(200).json({message:`Deleting contact where id = ${req.params.id}`});
// });

//however rather than explaining what these routes do in one single file. We'll define there functionality in a sperate file within the controllers folder

const { getContacts } = require('../controllers/contactController');
const { getOneContact } = require('../controllers/contactController');
const { deleteContact } = require('../controllers/contactController');
const { updateContact } = require('../controllers/contactController');
const { createContact } = require('../controllers/contactController');

router.route('/').get(getContacts);
router.route('/:id').get(getOneContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);
router.route('/:id').post(createContact);

module.exports = router;