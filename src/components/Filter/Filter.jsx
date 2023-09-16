import { FilterContainer } from './FilterStyled';

export const Filter = ({ filter, getFilterData }) => {
  return (
    <FilterContainer>
      <label className="filter-label">
        Find contacts by Name
        <input
          className="filter-input"
          type="text"
          name="filter"
          value={filter}
          onChange={getFilterData}
        />
      </label>{' '}
    </FilterContainer>
  );
};
