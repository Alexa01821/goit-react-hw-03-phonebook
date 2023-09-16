// import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container } from './AppStyled';
import { FormRegistration } from './FormRegistration/FormRegistration';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactData = newContact => {
    const isTrue = this.state.contacts.some(
      ({ name }) => name === newContact.name
    );
    if (isTrue) {
      Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  getFilterData = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const contacts = this.getFilterContacts();
    return (
      <Container>
        <h1 className="title">Phonebook</h1>
        <section className="contact-registration">
          <FormRegistration addContactData={this.addContactData} />
        </section>
        <section className="contacts">
          <h2 className="contacts-title">Contacts</h2>
          {this.state.contacts.length > 0 ? (
            <Filter
              filter={this.state.filter}
              getFilterData={this.getFilterData}
            />
          ) : (
            Notify.failure('Your phonebook is empty. Add first contact!')
          )}
          <ContactsList
            contacts={contacts}
            removeContact={this.removeContact}
          />
        </section>
      </Container>
    );
  }
}

// for tell: pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
