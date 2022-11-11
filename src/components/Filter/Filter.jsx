import React from 'react';
import { TiDelete } from 'react-icons/ti';

const Filter = ({ filterString, onChange, clearFilter, noContactsFiltred }) => {
  // noContactsFiltred && clearFilter();
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
      <button type="button" onClick={clearFilter}>
        <TiDelete />
      </button>
    </>
  );
};

export default Filter;
