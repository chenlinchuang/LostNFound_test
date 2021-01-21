const mongoose = require("mongoose");

const { Schema } = mongoose;

// Creating a schema, sort of like working with an ORM
const PictureSchema = new Schema(
  {
    id: {
      type: String,
      required: [true, "Id field is required."]
    },
    DataURL: {
      type: String,
      required: [true, "DataURL field is required."]
    },
    lastModified: {
      type: String,
      required: [true, "LastModified field is required."]
    },
    filename: {
      type: String,
      required: [true, "Filename field is required."]
    },
    type: {
      type: String,
      required: [true, "Type field is required."]
    }
  },
  { timestamps: true }
);

// Creating a table within database with the defined schema
const Picture = mongoose.model("picture", PictureSchema);

// Exporting table for querying and mutating
module.exports = Picture;
