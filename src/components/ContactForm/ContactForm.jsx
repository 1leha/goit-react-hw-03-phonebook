import React from 'react';
import { HiUserAdd } from 'react-icons/hi';

import { Formik, Form, Field } from 'formik';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const initialValue = {
  name: '',
  phone: '',
};

const validationString = {
  name: /^[a-zA-Zа-яА-Я]+(([' -][a - zA - Zа - яА - Я])?[a - zA - Zа - яА - Я]*) *$/,
  phone:
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
};

const validationShema = yup.object().shape({
  name: yup.string().matches(validationString.name).required(),
  phone: yup.string().matches(validationString.phone).required(),
});

const PhonebookEditor = ({ onSubmit }) => {
  const handelSubmit = (values, { resetForm }) => {
    const id = nanoid();

    onSubmit({ id, ...values });

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handelSubmit}
      validationSchema={validationShema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          name="name"
          placeholder="Name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        <br />

        <label htmlFor="phone">Phone number</label>
        <Field
          name="phone"
          type="tel"
          placeholder="Phone number"
          id="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <br />

        <button type="submit">
          <HiUserAdd /> Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default PhonebookEditor;
