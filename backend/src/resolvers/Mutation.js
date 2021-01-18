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
    const hasItem = (await db.getItems()).findIndex(
      (item) => (item.id.toString() === args.id.toString())
    );

    if (hasItem === -1) {
      throw new Error("Item not found");
    }

    const deletedItem = await db.popItem(args.id);

    return deletedItem;
  }
};

export default Mutation;
