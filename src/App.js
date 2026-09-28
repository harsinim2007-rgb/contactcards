import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import UserList from "./components/UserList";
import "./styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <h1 className="title">✨ Contact Manager 💜</h1>
      <p className="subtitle">Add and manage your contacts easily</p>

      <ContactForm addContact={addContact} />

      <h2 className="count">Total Contacts: {contacts.length}</h2>

      <UserList contacts={contacts} />
    </div>
  );
}
