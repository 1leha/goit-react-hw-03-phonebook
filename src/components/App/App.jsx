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

  onSubmit = formData => {
    console.log('formData :>> ', formData);
  };

  render() {
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
          <PhonebookEditor onSubmit={this.onSubmit} />
        </Section>
        <Section title="Contacts">Contacts</Section>
      </Box>
    );
  }
}
