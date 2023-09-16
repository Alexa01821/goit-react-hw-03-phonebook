import styled from 'styled-components';

export const FilterContainer = styled.div`
  margin: 20px;
  padding: 10px;
  border: var(--border);
  border-radius: 20px;
  .filter-label {
    font-size: 16px;
    line-height: 1.24;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: var(--color-navy-blue);
    display: flex;
    gap: 10px;
    .filter-input {
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
`;
