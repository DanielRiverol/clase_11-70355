import ContactsDTO from "../dao/dto/contacts.dto.js";
export default class ContactRepository {
  constructor(dao) {
    this.dao = dao;
  }

  getContacts = async () => {
    return await this.dao.get();
  };
  createContact = async (contact) => {
    const contactToInsert = new ContactsDTO(contact);
    return await this.dao.post(contactToInsert);
  };
}