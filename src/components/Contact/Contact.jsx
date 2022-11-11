import React from 'react';
import { MdDelete } from 'react-icons/md';

const Contact = ({ contactId, name, phone, getContactId }) => {
  const handelClick = () => {
    getContactId(contactId);
  };

  return (
    <li>
      {name}: {phone}
      <button type="button" onClick={handelClick}>
        <MdDelete />
      </button>
    </li>
  );
};

export default Contact;
