import { GraphQLServer, PubSub } from "graphql-yoga";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Item from "./resolvers/Item";
import Picture from "./resolvers/Picture";
import Category from "./resolvers/Category";
import DB from "./db";

// Testing database
// import db from "./localDB";

require("dotenv-defaults").config({
  path: "./.env",
  encoding: "utf8",
  defaults: "./.env.defaults",
});

const mongoose = require("mongoose");
const ItemsModel = require("./models/items");
const CategoriesModel = require("./models/categories");
const PicturesModel = require("./models/pictures");
const ContactsModel = require("./models/contacts");

if (!process.env.MONGO_URL) {
  console.error("Missing MONGO_URL!!!");
  process.exit(1);
}

const dboptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  auto_reconnect: true,
  useUnifiedTopology: true,
  poolSize: 10,
};

mongoose.connect(process.env.MONGO_URL, dboptions);

const mongoDB = mongoose.connection;
const pubsub = new PubSub();
const PORT = process.env.port || 4000;
const db = new DB(ItemsModel, CategoriesModel, PicturesModel, ContactsModel);

mongoDB.on("error", (error) => {
  console.error(error);
});

mongoDB.once("open", async () => {
  console.log("MongoDB connected!");
  const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
      Query,
      Mutation,
      Item,
      Picture,
      Category,
    },
    context: {
      db,
      pubsub,
    },
  });

  server.start({ port: PORT }, () => {
    console.log(`The server is up on port ${PORT}!`);
  });
});
