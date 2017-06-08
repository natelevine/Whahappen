import React from 'react';
import SearchForm from './SearchForm';

const searchHandler = (val) => {
  console.log("Handler triggered! val: " + val);
}

export const IndexPage = () => (
  <div className="home">
    IndexPage
    <div>
      <SearchForm searchHandler={searchHandler}/>
    </div>
  </div>
);

export default IndexPage;
