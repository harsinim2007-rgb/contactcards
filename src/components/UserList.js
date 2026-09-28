import React from "react";
import ContactCard from "./ContactCard";

export default function UserList({ contacts }) {
  return (
    <div className="list">
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </div>
  );
}
