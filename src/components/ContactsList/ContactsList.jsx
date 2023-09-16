import React from 'react';
import { ContactsListStyled } from './ContactsListStyled';
import { ContactsListItem } from './ContactsListItem';

export const ContactsList = ({ contacts, removeContact }) => {
  return (
    <ContactsListStyled>
      <ContactsListItem contacts={contacts} removeContact={removeContact} />
    </ContactsListStyled>
  );
};
