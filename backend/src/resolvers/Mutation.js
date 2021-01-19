// eslint-disable-next-line max-len
const StringToTime = (timeData) => new Date(
  timeData.year,
  timeData.month,
  timeData.day,
  timeData.hour,
  timeData.minute,
  timeData.second ? timeData.second : 0
);

const Mutation = {
  async createItem(parent, args, { db }) {
    const time = StringToTime(args.time);
    if (args.pic && !args.lastModified) {
      throw new Error("Picture must has lasModified field.");
    }
    if (args.pic) {
      const picture = await db.pushPicture({
        ...args.pic,
        lastModified: StringToTime(args.lastModified).getTime()
      });
      const newItem = await db.pushItem({
        ...args.data,
        time: time.getTime(),
        description: args.data.description ? args.data.description : "",
        pic: picture.id
      });

      return newItem;
    }
    const newItem = await db.pushItem({
      ...args.data,
      time: time.getTime(),
      description: args.data.description ? args.data.description : ""
    });

    return newItem;
  },
  async updateItem(parent, args, { db }) {
    if (args.time) {
      const updatedItem = await db.updateItem({
        ...args.data,
        time: StringToTime(args.time).getTime()
      });

      return updatedItem;
    }
    const updatedItem = await db.updateItem(args.data);

    return updatedItem;
  },

  async deleteItem(parent, args, { db }) {
    const allItems = await db.getItems();
    const hasItem = allItems.findIndex(
      (item) => (item.id.toString() === args.id.toString())
    );

    if (hasItem === -1) {
      throw new Error("Item not found");
    }

    const deletedItem = await db.popItem(args.id);

    return deletedItem.id;
  },
};

export default Mutation;
