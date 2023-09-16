import { Component } from 'react';
import { Form } from './FormRegistrationStyled';
import { nanoid } from 'nanoid';

export class FormRegistration extends Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
  };
  getContactData = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addContact = event => {
    event.preventDefault();
    this.props.addContactData(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Form onSubmit={this.addContact}>
        <h2 className="contact-registration-title">Registration</h2>
        <div className="contact-registration">
          <label className="contact-registration-label">
            Name
            <input
              className="contact-registration-input"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              autoComplete="off"
              value={this.state.name}
              onChange={this.getContactData}
              required
            />
          </label>
          <label className="contact-registration-label">
            Number
            <input
              className="contact-registration-input"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              autoComplete="off"
              onChange={this.getContactData}
              value={this.state.number}
              required
            />
          </label>
        </div>
        <button type="submit" className="contact-registration-btn">
          Add contact
        </button>
      </Form>
    );
  }
}
