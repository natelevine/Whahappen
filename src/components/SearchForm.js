import React from 'react';

export const SearchForm = ({searchHandler}) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        searchHandler(input.value);
        input.value = '';
      }}>
        Search!
      </button>
    </div>
  );
};

export default SearchForm;
