import { Router } from "express";
// import Contacts from "../dao/mongo/contact.mongo.dao.js";
// import Contacts from "../dao/memory/contact.memory.dao.js";
// import ContactsDTO from "../dao/dto/contacts.dto.js";
import { contactService } from "../repository/index.js";
const router = Router();

// const contactService = new Contacts();

router.get("/", async (req, res) => {
  const result = await contactService.getContacts();

  res.status(200).send({ status: "success", payload: result });
});
router.post("/", async (req, res) => {
  // const { name, email, phone } = req.body;

  // const result = await contactService.post({ name, email, phone });
  const { nombre, correo, tel } = req.body;
  // const formatContatc = new ContactsDTO({ nombre, correo, tel });
  // const result = await contactService.post(formatContatc);
  const result = await contactService.createContact({ nombre, correo, tel });
  res.status(201).send({ status: "success", payload: result });
});

export default router;
