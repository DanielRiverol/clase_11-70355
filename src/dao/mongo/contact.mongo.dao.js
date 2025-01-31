import contactModel from "./models/contact.model.js";

export default class Contacts {
  constructor() {}
  get = async () => {
    return await contactModel.find();
  };
}
