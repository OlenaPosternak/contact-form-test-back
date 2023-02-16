const { Message } = require("../models/messages");

const addMessage = async (req, res, next) => {
  try {
   
    const newMessage = await Message.create(req.body);
   
    res.status(201).send(newMessage);
  } catch (error) {
    next();
  }
};

module.exports = { addMessage};
