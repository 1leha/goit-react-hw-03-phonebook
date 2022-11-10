import { Formik, Form, Field, ErrorMessage } from 'formik';
// import yap from 'yap';
import React from 'react';

const initialValue = {
  name: '',
  phone: '',
};
const PhonebookEditor = () => {
  const handelSubmit = (values, actions) => {
    console.log('values :>> ', values);
    console.log('actions :>> ', actions);
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handelSubmit}>
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" placeholder="Name" id="name" />
        <br />
        <label htmlFor="phone">Phone number</label>

        <Field name="phone" type="tel" placeholder="Phone number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default PhonebookEditor;
