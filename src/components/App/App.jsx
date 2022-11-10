import React, { Component } from 'react';

import { Box } from 'components/Box';
import Section from 'components/Section';
import PhonebookEditor from 'components/PhonebookEditor';

// import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="xxl"
        color="primary"
      >
        <Section title="My phonebook">
          <PhonebookEditor />
        </Section>
        <Section title="Contacts">Contacts</Section>
      </Box>
    );
  }
}
