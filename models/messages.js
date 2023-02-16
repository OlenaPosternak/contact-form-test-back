const { Schema, model } = require("mongoose");
const Joi = require("joi");

const messagesSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set phone number for contact"],
    },

    info: {
      type: String,
      required: [true, "Set text for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Message = model("message", messagesSchema);

const messageSchemaJoi = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  info: Joi.string().required(),
});

module.exports = {
  Message,
  messageSchemaJoi,
};
