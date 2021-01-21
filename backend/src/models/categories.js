const mongoose = require("mongoose");

const { Schema } = mongoose;

// Creating a schema, sort of like working with an ORM
const CategorySchema = new Schema(
  {
    id: {
      type: String,
      required: [true, "Id field is required."]
    },
    name: {
      type: String,
      required: [true, "Name field is required."]
    },
  },
  { timestamps: true }
);

// Creating a table within database with the defined schema
const Category = mongoose.model("category", CategorySchema);

// Exporting table for querying and mutating
module.exports = Category;
