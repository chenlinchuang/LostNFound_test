import { v4 as uuidv4 } from "uuid";

const items = [
  {
    briefIntro: "studentIDCard",
    id: "1",
    location: "NTUEE2",
    category: "101",
    time: 1610937807132,
    description: "123456879",
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
];

const getItems = () => items;
const getCategories = () => categories;
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

const popItem = (itemID) => {
  const deletedItem = items.splice(
    items.findIndex((item) => item.id === itemID), 1
  )[0];

  console.log("deletedItem:", deletedItem);

  return deletedItem;
};

const DB = {
  getItems,
  pushItem,
  updateItem,
  popItem,
  getCategories,
};

export default DB;
