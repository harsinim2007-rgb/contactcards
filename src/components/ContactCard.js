import React from "react";

export default function ContactCard({ contact }) {
  return (
    <div className="card">
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
}
