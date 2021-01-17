const Query = {
  async items(parent, args, { db }) {
    if (!args.query && !args.id) {
      const allItems = await db.getItems();
      return allItems;
    }

    return null;
  },
};

export default Query;
