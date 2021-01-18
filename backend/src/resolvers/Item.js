import pic from "../data";

const timeToString = (time) => {
  const t = new Date(time);
  return {
    year: t.getFullYear(),
    month: t.getMonth() + 1,
    day: t.getDate(),
    hour: t.getHours(),
    minute: t.getMinutes(),
    second: t.getSeconds(),
  };
};

const Item = {
  time(parent) {
    return timeToString(parent.time);
  },
  async category(parent, args, { db }) {
    const allCategories = await db.getCategories();
    const result = allCategories.find((c) => c.id.toString() === parent.category.toString());
    return result;
  },
  async pic(parent, args, { db }) {
    const result = await db.getPictureById(parent.pic);
    return result;
  }
};

export default Item;
