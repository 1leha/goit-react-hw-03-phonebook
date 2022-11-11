import React from 'react';

const Filter = ({ filterString, onChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <br />
      <input
        type="text"
        name="filter"
        id="filter"
        value={filterString}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
