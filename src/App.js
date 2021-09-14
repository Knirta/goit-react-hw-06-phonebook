import React from "react";
import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import "./App.scss";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>There are no contacts yet...</p>
      )}
    </Container>
  );
};

export default App;
