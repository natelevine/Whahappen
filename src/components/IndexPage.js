import React from 'react';
import SearchForm from './SearchForm';
import Timeline from './Timeline';
import axios from 'axios';

export class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timelineData: []
    }
    this.apiUrl = 'http://localhost:9999/api/data/';
  }

  searchHandler(userId) {
    console.log("Handler triggered! val: " + userId);
    console.log("apiURL: ", this.apiUrl);
    axios.get(this.apiUrl + userId)
      .then((res) => {
        console.log("response from api call: ", res);
        this.state.timelineData = res.data;
        this.setState({timelineData: this.state.timelineData});
      })
  }

  render() {

    return (
      <div className="home">

      <div id="search">
      <SearchForm searchHandler={this.searchHandler.bind(this)}/>
      </div>
      <Timeline data={this.state.timelineData}/>
      </div>
    );
  }
}
