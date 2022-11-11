import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValue = {
  name: '',
  phone: '',
};

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationShema = yup.object().shape({
  name: yup.string().matches(nameRegExp).required(),
  phone: yup.string().matches(phoneRegExp),
});

const PhonebookEditor = ({ onSubmit }) => {
  const handelSubmit = (values, actions) => {
    console.log('PhonebookEditor values :>> ', values);
    console.log('PhonebookEditor actions :>> ', actions);

    onSubmit(values);
    actions.resetForm();
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

        {/* <br />

        <label htmlFor="phone">Phone number</label>
        <Field name="phone" type="tel" placeholder="Phone number" /> */}

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default PhonebookEditor;
