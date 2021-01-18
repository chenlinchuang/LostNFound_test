const Category = {
  async items(parent, args, { db }) {
    const allItems = await db.getItems();
    const result = allItems.filter(
      (item) => item.category.toString() === parent.id.toString()
    );
    return result;
  }
};

export default Category;
