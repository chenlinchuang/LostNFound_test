import { v4 as uuidv4 } from "uuid";

const items = [
  {
    briefIntro: "studentIDCard",
    id: "1",
    location: "NTUEE2",
    category: "101",
    time: 1610937807132,
    description: "123456879",
    pic: "11",
  },
  {
    briefIntro: "water bottle",
    id: "2",
    location: "MD401",
    category: "103",
    time: 1610930807132,
    description: "water water water",
    pic: "12"
  },
  {
    briefIntro: "iphone",
    id: "3",
    location: "MD401",
    category: "103",
    time: 1610930897132,
    description: "",
  }
];

const categories = [
  {
    name: "IDcards",
    id: "101",
  },
  {
    name: "phones",
    id: "102",
  },
  {
    name: "bottles",
    id: "103",
  },
];

const pictures = [
  {
    id: "11",
    DataURL: "picture01",
    filename: "picture01.png",
    lastModified: 1602655902693
  },
  {
    id: "12",
    DataURL: "picture02",
    filename: "picture02.png",
    lastModified: 1602605902693
  }
];

const getItems = () => items;
const getCategories = () => categories;
const getPictures = () => pictures;

const getItemById = (id) => items.find((item) => (item.id.toString() === id));
const getCategoryById = (id) => categories.find((c) => (c.id.toString() === id));
const getPictureById = (id) => pictures.find((p) => (p.id.toString() === id));

const pushItem = (data) => {
  const id = uuidv4();
  const response = {
    ...data,
    id
  };
  items.push(response);
  console.log("pushedItem:", response);
  return response;
};

const updateItem = (data) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id.toString() === data.id.toString()) {
      items[i] = {
        ...items[i],
        ...data,
      };
      console.log("updatedItem:", items[i]);
      return items[i];
    }
  }
  throw new Error("Item not found");
};

const popPicture = (picID) => {
  const deletedPicture = pictures.splice(
    pictures.findIndex((pic) => pic.id === picID), 1
  )[0];

  console.log("deletedPicture:", deletedPicture);

  return deletedPicture;
};

const popItem = (itemID) => {
  const index = items.findIndex((item) => item.id === itemID);
  popPicture(items[index].pic);
  const deletedItem = items.splice(index, 1)[0];

  console.log("deletedItem:", deletedItem);

  return deletedItem;
};

const pushPicture = (data) => {
  const newPicture = {
    ...data,
    id: uuidv4()
  };
  pictures.push(newPicture);
  console.log("pushPicture:", newPicture);
  return newPicture;
};

const DB = {
  getItems,
  getItemById,
  pushItem,
  updateItem,
  popItem,
  getCategories,
  getCategoryById,
  getPictures,
  getPictureById,
  pushPicture,
};

export default DB;
