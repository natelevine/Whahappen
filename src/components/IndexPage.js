import React from 'react';
import SearchForm from './SearchForm';

const searchHandler = (val) => {
  console.log("Handler triggered! val: " + val);
}

export const IndexPage = () => (
  <div className="home">

    <div id="search">
      <SearchForm searchHandler={searchHandler}/>
    </div>

    <div id="results">
    <table>
      <tbody>
      <tr>
        <th>June 8</th>
        <td className="time">12:31pm</td>
        <td className="description">
          <h4>Something happened</h4>
          <p>On the site, here's some metadata about the event and it's probably really long and verbose so let's be real about that</p>
        </td>
      </tr>
      </tbody>
    </table>
    </div>

  </div>
);

export default IndexPage;
