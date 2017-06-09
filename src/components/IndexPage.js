import React from 'react';
import SearchForm from './SearchForm';
import Timeline from './Timeline';

const dummyData = [
  {
    type: 'note',
    id: 12345,
    timestamp: "2/7/18 11:11",
    message: "On the site, here's some metadata about the event and it's probably really long and verbose so let's be real about that"
  },
  {
    type: 'fullstory',
    id: 12346,
    timestamp: "2/7/18 1:51",
    url: "fullstory.com/thisisafullstory"
  },
  {
    type: 'event',
    id: 12347,
    timestamp: "2/8/18 4:56",
    eventName: "login",
    properties: ["these", "are", "some", "properties"]
  }
];

const searchHandler = (val) => {
  console.log("Handler triggered! val: " + val);
}

export const IndexPage = () => (
  <div className="home">

    <div id="search">
      <SearchForm searchHandler={searchHandler}/>
    </div>
    <Timeline data={dummyData}/>
  </div>
);

export default IndexPage;
