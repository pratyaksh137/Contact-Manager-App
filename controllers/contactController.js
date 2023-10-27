// @desc Get all Contacts
//route: GET /api/contacts
//@access: public

const asyncHandler = require('express-async-handler');
//asyncHandler allows you to use try catch block without actually using it.

const getContacts = asyncHandler(async(req, resp) => {
    resp.status(200).json({ message: 'Get All Contacts' })
});

const getOneContact = asyncHandler(async(req, resp) => {
    console.log(req.params); //returns in object format
    resp.status(200).json({ message: `Get contacts for id = ${req.params.id}` }) // returns only id 
});

const createContact = asyncHandler(async(req, resp) => {
    console.log(req.body);
    const { name, status } = req.body;
    if (!name || !status) {
        resp.status(400);
        throw new Error('All fields are mandatory');
    }
    resp.status(200).json({ message: `Create a new contact for id = ${req.params.id}` });
});

const deleteContact = asyncHandler(async(req, resp) => {
    resp.status(200).json({ message: `Deleting contact where id = ${req.params.id}` });
});

const updateContact = asyncHandler(async(req, resp) => {
    resp.status(200).json({ message: `Update Contact where id = ${req.params.id}` });
});

module.exports = {
    getContacts,
    getOneContact,
    createContact,
    deleteContact,
    updateContact
};