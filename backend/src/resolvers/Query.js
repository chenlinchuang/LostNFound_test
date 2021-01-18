const Query = {
  async items(parent, args, { db }) {
    const allItems = await db.getItems();
    if (!args.query && !args.id) {
      return allItems;
    }
    if (!args.query) {
      const resultIndex = allItems.findIndex((item) => (item.id.toString() === args.id.toString()));

      if (resultIndex === -1) {
        throw new Error("Item not found");
      }

      return [allItems[resultIndex]];
    }
    const result = allItems.filter((item) => {
      const isBriefIntroMatch = item.briefIntro.toLowerCase().includes(args.query.toLowerCase());
      const isDescriptionMatch = item.description.toLowerCase().includes(args.query.toLowerCase());
      return isBriefIntroMatch || isDescriptionMatch;
    });

    return result;
  },
};

export default Query;
