import React, { Component } from 'react';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';

// import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onSubmit = ({ name, phone }) => {
    // console.log('formData :>> ', formData);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { name }],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="l"
        color="primary"
      >
        <Section title="My phonebook">
          <ContactForm onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">
          <ul>
            {contacts.map(({ name }) => (
              <li>{name}</li>
            ))}
          </ul>
        </Section>
      </Box>
    );
  }
}
