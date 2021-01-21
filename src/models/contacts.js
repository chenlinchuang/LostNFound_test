const mongoose = require("mongoose");

const { Schema } = mongoose;

// Creating a schema, sort of like working with an ORM
const ContactSchema = new Schema(
  {
    id: {
      type: String,
      required: [true, "Id field is required."]
    },
    email: {
      type: String,
    },
    facebook: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    other: {
      type: String,
    }
  },
  { timestamps: true }
);

// Creating a table within database with the defined schema
const Contact = mongoose.model("contact", ContactSchema);

// Exporting table for querying and mutating
module.exports = Contact;
