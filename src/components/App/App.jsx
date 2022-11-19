import React, { Component } from 'react';
import { AiOutlineClear } from 'react-icons/ai';

import localeStoregeApi from '../../localeStorageApi/';
import { message } from '../settings';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';

import {
  AppStyled,
  AppTitleStyled,
  ClearButtonStyled,
  VersionStyled,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
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
      contacts: [{ id, name, phone }, ...contacts],
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

  //!-------------------------------
  //!    LocaleStorage operation
  //!-------------------------------

  componentDidMount() {
    const savedContacts = localeStoregeApi.readContacts();

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localeStoregeApi.writeContacts(this.state.contacts);
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const { isEmptyBook, noMatches } = message;

    const filterNormalized = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterNormalized)
    );

    const isPhonebookEmpty = contacts.length === 0;
    const isFilteredContactsEmpty = filteredContacts.length === 0;

    console.log(this.state.contacts.length === 0);

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
        <Box position="relative">
          <AppTitleStyled>My phonebook</AppTitleStyled>
          <VersionStyled>LocaleStorage Mode</VersionStyled>
        </Box>

        <AppStyled>
          <Section title="Contacts editor">
            <ContactForm onSubmit={this.onSubmit} />
          </Section>

          <Section title="Contacts">
            <ClearButtonStyled
              type="button"
              disabled={this.state.contacts.length === 0}
              onClick={() => {
                this.setState({ contacts: [] });
              }}
            >
              <AiOutlineClear size="30" />
            </ClearButtonStyled>
            {isPhonebookEmpty ? (
              <Notification message={isEmptyBook} />
            ) : (
              <>
                <Filter
                  filterString={filter}
                  onChange={this.handleChangeFilter}
                  clearFilter={this.clearFilter}
                  noContactsFiltred={isFilteredContactsEmpty}
                />

                {isFilteredContactsEmpty ? (
                  <Notification message={noMatches} />
                ) : (
                  <ContactList
                    contacts={filteredContacts}
                    onDeleteContact={this.deleteContact}
                  />
                )}
              </>
            )}
          </Section>
        </AppStyled>
      </Box>
    );
  }
}
