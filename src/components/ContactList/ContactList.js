import React from "react";
import { useSelector } from "react-redux";
import ContactListItem from "../ContactListItem";
import { getfilteredItems } from "../../redux/contacts/contacts-selectors";
import "./ContactList.scss";

const ContactList = () => {
  const contacts = useSelector(getfilteredItems);

  return (
    <ul className="ContactList">
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
