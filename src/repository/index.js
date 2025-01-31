// factory
import Contacts from "../dao/memory/contact.memory.dao.js";

import ContactRepository from "./contacts.repository.js";

export const contactService= new ContactRepository(new Contacts())