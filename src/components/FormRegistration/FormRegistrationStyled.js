import styled from 'styled-components';

export const Form = styled.form`
  .contact-registration-title {
    font-size: 20px;
    line-height: 1.25;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: var(--color-navy-blue);
    margin-bottom: 16px;
  }
  .contact-registration {
    width: 400px;
    margin: 0 auto;
    padding: 20px 0;
    .contact-registration-label {
      color: var(--color-iris);
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 10px;
      .contact-registration-input {
        width: 350px;
        font-size: 16px;
        line-height: 1.25;
        text-align: center;
        margin: 0 auto;
        letter-spacing: 0.02em;
        background-color: transparent;
        border: 0;
        border-bottom: var(--border);
        &:focus,
        &:valid {
          outline: 0;
          border-bottom-color: var(--color-iris);
        }
      }
    }
  }
  .contact-registration-btn {
    height: 30px;
    margin: 16px auto;
    background-color: var(--color-iris);
    border-radius: 6px;
    color: var(--color-modal);
    border: 0;
    &:focus {
      outline: 0;
    }
  }
`;
