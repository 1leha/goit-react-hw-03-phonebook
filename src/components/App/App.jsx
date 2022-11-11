import React, { Component } from 'react';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

// import { AppStyled } from './App.styled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: defaultContacts,
    filter: '',
  };

  isContactExist = abonentName => {
    return this.state.contacts.find(({ name }) => name === abonentName);
  };

  onSubmit = ({ id, name, phone }) => {
    if (this.isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, phone }],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  clearFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterNormalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );

    const isPhonebookEmpty = contacts.length === 0;
    const isFilteredContactsEmpty = filteredContacts.length === 0;

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
          {isPhonebookEmpty ? (
            'The phonebook is empty...'
          ) : (
            <>
              <Filter
                filterString={filter}
                onChange={this.handleChangeFilter}
                clearFilter={this.clearFilter}
                noContactsFiltred={isFilteredContactsEmpty}
              />
              {isFilteredContactsEmpty ? (
                'No matches found!'
              ) : (
                <ContactList
                  contacts={filteredContacts}
                  onDeleteContact={this.deleteContact}
                />
              )}
            </>
          )}
        </Section>
      </Box>
    );
  }
}
