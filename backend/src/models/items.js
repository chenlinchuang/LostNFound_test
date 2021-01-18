const mongoose = require("mongoose");

const { Schema } = mongoose;

// Creating a schema, sort of like working with an ORM
const ItemSchema = new Schema(
  {
    briefIntro: {
      type: String,
      required: [true, "BriefIntro field is required."],
    },
    location: {
      type: String,
      required: [true, "location field is required."],
    },
    category: {
      type: String,
      required: [true, "Category field is required."],
    },
    description: {
      type: String
    },
    pic: {
      type: String
    }
  },
  { timestamps: true }
);

// Creating a table within database with the defined schema
const Item = mongoose.model("message", ItemSchema);

// Exporting table for querying and mutating
module.exports = Item;
