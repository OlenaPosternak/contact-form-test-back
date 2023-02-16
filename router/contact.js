const express = require("express");

const { addContact } = require("../controllers/contact");

const { validation } = require("../middlewares");
const { contactsSchemaJoi } = require("../models/contacts");
const validateMiddleware = validation(contactsSchemaJoi);

const router = express.Router();

router.post("/", validateMiddleware, addContact);

module.exports = router;
