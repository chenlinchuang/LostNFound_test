import { v4 as uuidv4 } from "uuid";

class DB {
  constructor(item, category, pic, contact) {
    this.ItemModel = item;
    this.PictureModel = pic;
    this.CategoryModel = category;
    this.ContactModel = contact;
  }

  async getItems() {
    const result = await this.ItemModel.find({}).exec();
    return result;
  }

  async getCategories() {
    const result = await this.CategoryModel.find({}).exec();
    return result;
  }

  async getPictures() {
    const result = await this.PictureModel.find({}).exec();
    return result;
  }

  async getContacts() {
    const result = await this.ContactModel.find({}).exec();
    return result;
  }

  async getItemById(itemId) {
    const result = await this.ItemModel.find({ id: itemId }).exec();
    return result[0];
  }

  async getCategoryById(categoryId) {
    const result = await this.CategoryModel.find({ id: categoryId }).exec();
    return result[0];
  }

  async getPictureById(picId) {
    const result = await this.PictureModel.find({ id: picId }).exec();
    return result[0];
  }

  async getContactById(contactId) {
    const result = await this.ContactModel.find({ id: contactId }).exec();
    return result[0];
  }

  async pushItem(data) {
    const id = uuidv4();
    const response = {
      ...data,
      id,
    };
    const pushedItem = new this.ItemModel(response);
    await pushedItem.save((err) => {
      if (err) throw err;
    });

    console.log("pushedItem:", pushedItem);

    return pushedItem;
  }

  async pushCategory(data) {
    const newCategory = {
      ...data,
      id: uuidv4(),
    };

    const pushedCategory = new this.CategoryModel(newCategory);
    await pushedCategory.save((err) => {
      if (err) throw err;
    });

    console.log("pushCategory:", pushedCategory);

    return pushedCategory;
  }

  async pushPicture(data) {
    const newPicture = {
      ...data,
      id: uuidv4(),
    };

    const pushedPicture = new this.PictureModel(newPicture);
    await pushedPicture.save((err) => {
      if (err) throw err;
    });

    console.log("pushPicture:", pushedPicture);

    return pushedPicture;
  }

  async pushContact(data) {
    const newContact = {
      ...data,
      id: uuidv4(),
    };

    const pushedContact = new this.ContactModel(newContact);
    await pushedContact.save((err) => {
      if (err) throw err;
    });

    console.log("pushContact:", pushedContact);

    return pushedContact;
  }
}

export default DB;
