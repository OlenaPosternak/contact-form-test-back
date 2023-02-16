const { Contact } = require("../models/contacts");

const addContact = async (req, res, next) => {
  try {
   
    const newContact = await Contact.create(req.body);
   
    res.status(201).send(newContact);
  } catch (error) {
    next();
  }
};

module.exports = { addContact };
