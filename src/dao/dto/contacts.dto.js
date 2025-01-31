export default class ContactsDTO {
  constructor(contact) {
    this.name = contact.nombre;
    this.email = contact.correo;
    this.phone = contact.tel ? contact.tel.split("-").join("") : "";
  }
}
