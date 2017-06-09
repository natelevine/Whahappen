import React from 'react';

export const SearchForm = ({searchHandler}) => {
  let input;

  return (
    <div>
      <input placeholder="Enter User ID" type="text" ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        searchHandler(input.value);
        input.value = '';
      }}>
        Find Out
      </button>
    </div>
  );
};

export default SearchForm;
