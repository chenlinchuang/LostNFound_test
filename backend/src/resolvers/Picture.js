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

const Picture = {
  async lastModified(parent) {
    // console.log("lastmodified:0", timeToString(parent.time))
    return timeToString(parent.lastModified);
  },
  async item(parent, args, { db }) {
    const allItems = await db.getItems();
    console.log("picture items:", allItems);
    const result = allItems.find((item) => {
      if (item.pic) {
        return item.pic.toString() === parent.id.toString();
      }

      return false;
    });
    return result;
  },
};

export default Picture;
