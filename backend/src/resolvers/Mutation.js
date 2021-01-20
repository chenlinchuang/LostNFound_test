// eslint-disable-next-line max-len
const StringToTime = (timeData) =>
  new Date(
    timeData.year,
    timeData.month,
    timeData.day,
    timeData.hour,
    timeData.minute,
    timeData.second ? timeData.second : 0
  );

const Mutation = {
  async createItem(parent, args, { db }) {
    // const time = StringToTime(args.time);
    const time = parseInt(args.time, 10);
    // if (args.pic && !args.lastModified) {
    //   throw new Error("Picture must has lasModified field.");
    // }

    const newItem = {
      ...args.data,
      time,
      description: args.data.description ? args.data.description : "",
    };

    if (args.pic) {
      const newPicture = {
        ...args.pic,
        lastModified: parseInt(args.pic.lastModified, 10),
      };
      const picture = await db.pushPicture(newPicture);
      newItem.pic = picture.id;
    }

    if (args.contact) {
      const contact = await db.pushContact(args.contact);
      newItem.contact = contact.id;
    }

    const result = await db.pushItem(newItem);

    return result;
  },
  async updateItem(parent, args, { db }) {
    if (args.time) {
      const updatedItem = await db.updateItem({
        ...args.data,
        time: StringToTime(args.time).getTime(),
      });

      return updatedItem;
    }
    const updatedItem = await db.updateItem(args.data);

    return updatedItem;
  },

  async deleteItem(parent, args, { db }) {
    const allItems = await db.getItems();
    const hasItem = allItems.findIndex(
      (item) => item.id.toString() === args.id.toString()
    );

    if (hasItem === -1) {
      throw new Error("Item not found");
    }

    const deletedItem = await db.popItem(args.id);

    return deletedItem.id;
  },

  async createCategory(parent, args, { db }) {
    const newCategory = db.pushCategory({ name: args.name });

    return newCategory;
  },
};

export default Mutation;
