import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { Box } from 'components/Box';

const Filter = ({ filterString, onChange, clearFilter }) => {
  return (
    <Box>
      <label htmlFor="filter">Find contacts by name</label>
      <Box>
        <input
          type="text"
          name="filter"
          id="filter"
          value={filterString}
          onChange={onChange}
        />
        <button type="button" onClick={clearFilter}>
          <TiDelete />
        </button>
      </Box>
    </Box>
  );
};

export default Filter;
