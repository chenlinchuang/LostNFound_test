const Query = {
  async items(parent, args, { db }) {
    const allItems = await db.getItems();
    if (!args.query && !args.id) {
      return allItems;
    }
    if (!args.query) {
      const resultIndex = allItems.findIndex(
        (item) => item.id.toString() === args.id.toString()
      );

      if (resultIndex === -1) {
        throw new Error("Item not found");
      }

      return [allItems[resultIndex]];
    }
    const result = allItems.filter((item) => {
      const isBriefIntroMatch = item.briefIntro
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isDescriptionMatch = item.description
        .toLowerCase()
        .includes(args.query.toLowerCase());
      return isBriefIntroMatch || isDescriptionMatch;
    });

    return result;
  },

  async pictures(parent, args, { db }) {
    const allPictures = await db.getPictures();
    if (!args.query && !args.id) {
      return allPictures;
    }

    return allPictures;
  },

  async categories(parent, args, { db }) {
    const allCategories = await db.getCategories();
    if (!args.query && !args.id) {
      return allCategories;
    }

    return allCategories;
  },
};

export default Query;
