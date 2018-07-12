import React from 'react';
import SearchBar from './Components/searchBar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div id="top">
          <h2>Welcome to React!</h2>
          <SearchBar></SearchBar>
        </div>
        <div id="bottom">
          sasda
        </div>
      </div>
    );
  }
}
