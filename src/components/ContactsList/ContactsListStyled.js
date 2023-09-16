import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  .contacts-item {
    font-size: 16px;
    line-height: 1.24;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: var(--color-navy-blue);
    display: flex;
    align-items: center;
    gap: 15px;
    .contact-registration-btn {
      height: 20px;
      background-color: var(--color-iris);
      border-radius: 6px;
      color: var(--color-modal);
      border: 0;
      &:focus {
        outline: 0;
      }
    }
  }
`;
