const express = require("express");

const { addMessage } = require("../controllers/message");

const { validation } = require("../middlewares");
const { messageSchemaJoi } = require("../models/messages");
const validateMiddleware = validation(messageSchemaJoi);

const router = express.Router();

router.post("/", validateMiddleware, addMessage);

module.exports = router;
