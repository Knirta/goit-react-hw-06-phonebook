import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import { v4 as uuidv4 } from "uuid";
import "./App.scss";

const App = () => {
  const defaultContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts")) ?? defaultContacts
    );
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contactData) => {
    if (contacts.find((contact) => contact.name === contactData.name)) {
      alert(contactData.name + " is already in contacts");
      return;
    }

    const contact = {
      id: uuidv4(),
      name: contactData.name,
      number: contactData.number,
    };

    setContacts((prev) => [contact, ...prev]);
  };

  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContact();

  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="title">Contacts</h2>
      <Filter
        filter={filter}
        handleFilter={(e) => setFilter(e.currentTarget.value)}
      />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </Container>
  );
};

export default App;
