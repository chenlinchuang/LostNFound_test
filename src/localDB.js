import { v4 as uuidv4 } from "uuid";
import imageData from "./imageData";

const items = [
  {
    briefIntro: "studentIDCard",
    id: "1",
    location: "NTUEE2",
    category: "101",
    time: 1610937807132,
    description: "123456879",
    pic: "11",
    isMatch: "NEED_TO_FIND",
    contact: "51",
  },
  {
    briefIntro: "water bottle",
    id: "2",
    location: "MD401",
    category: "103",
    time: 1610930807132,
    description: "water water water",
    pic: "12",
    isMatch: "IS_FOUND",
    contact: "52",
  },
  {
    briefIntro: "iphone",
    id: "3",
    location: "MD401",
    category: "103",
    time: 1610930897132,
    description: "",
    isMatch: "IS_MATCH",
  },
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
  {
    name: "others",
    id: "104",
  },
];

const pictures = [
  {
    id: "11",
    DataURL: imageData.studentIDCard,
    filename: "picture01.png",
    lastModified: 1602655902693,
    type: "image/jpeg",
  },
  {
    id: "12",
    DataURL: imageData.waterBottle,
    filename: "picture02.png",
    lastModified: 1602605902693,
    type: "image/jpeg",
  }
];

const contacts = [
  {
    id: "51",
    email: "123@gmail.com",
    fackbook: "123",
    phoneNumber: "09123456789",
  },
  {
    id: "52",
    email: "qqq@yahoo.com.tw",
    facebook: "888",
    other: "test",
  },
];

const getItems = () => items;
const getCategories = () => categories;
const getPictures = () => pictures;
const getContacts = () => contacts;

const getItemById = (id) => items.find((item) => item.id.toString() === id);
const getCategoryById = (id) => categories.find((c) => c.id.toString() === id);
const getPictureById = (id) => pictures.find((p) => p.id.toString() === id);
const getContactById = (id) => contacts.find((c) => c.id.toString() === id);

const pushItem = (data) => {
  const id = uuidv4();
  const response = {
    ...data,
    id,
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
  const index = pictures.findIndex((pic) => pic.id === picID);
  if (index === -1) {
    throw new Error("Picture not found");
  }
  const deletedPicture = pictures.splice(index, 1)[0];

  console.log("deletedPicture:", deletedPicture);

  return deletedPicture;
};

const popContact = (contactID) => {
  const deletedContact = contacts.splice(
    contacts.findIndex((c) => c.id.toString() === contactID.toString()),
    1
  )[0];

  console.log("deletedContact:", deletedContact);
  return deletedContact;
};

const popItem = (itemID) => {
  const index = items.findIndex((item) => item.id === itemID);
  if (index === -1) {
    throw new Error("Item not found");
  }
  if (items[index].pic) {
    popPicture(items[index].pic);
  }
  if (items[index].contact) {
    popContact(items[index].contact);
  }
  const deletedItem = items.splice(index, 1)[0];

  console.log("deletedItem:", deletedItem);

  return deletedItem;
};

const pushCategory = (data) => {
  const newCategory = {
    ...data,
    id: uuidv4(),
  };

  console.log("pushCategory:", newCategory);

  return newCategory;
};

const pushPicture = (data) => {
  const newPicture = {
    ...data,
    id: uuidv4(),
  };
  pictures.push(newPicture);
  console.log("pushPicture:", newPicture);
  return newPicture;
};

const pushContact = (data) => {
  const newContact = {
    ...data,
    id: uuidv4(),
  };
  contacts.push(newContact);
  console.log("pushContact:", newContact);
  return newContact;
};

const DB = {
  getItems,
  getItemById,
  pushItem,
  updateItem,
  popItem,
  getCategories,
  getCategoryById,
  pushCategory,
  getPictures,
  getPictureById,
  pushPicture,
  getContacts,
  getContactById,
  pushContact,
};

export default DB;
