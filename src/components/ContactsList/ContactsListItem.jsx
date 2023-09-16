export const ContactsListItem = ({ contacts, removeContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li className="contacts-item" key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button
          type="button"
          className="contact-registration-btn"
          onClick={()=>{removeContact(id)}}
        >
          delete
        </button>
      </li>
    );
  });
};
