import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

// import { AppStyled } from './App.styled';

const defaultContacts = [
  { name: 'Bob Barker', phone: '1111111111' },
  { name: 'Alf', phone: '22222' },
  { name: 'Rik', phone: '333333333333' },
  { name: 'Morty', phone: '4444444444' },
  { name: 'Dan Luis', phone: '55555555555' },
  { name: 'Alise', phone: '7683475638465834' },
];

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  onSubmit = ({ name, phone }) => {
    // console.log('formData :>> ', formData);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { name, phone }],
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterNormalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );
    console.log('filteredContacts :>> ', filteredContacts);
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
          <Filter filterString={filter} onChange={this.handleChangeFilter} />
          <ul>
            {filteredContacts.map(({ name, phone }) => (
              <li key={nanoid()}>
                {name}: {phone}
              </li>
            ))}
          </ul>
        </Section>
      </Box>
    );
  }
}
