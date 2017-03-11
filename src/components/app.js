import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
    };
  }
  fetchSongs = () => {
    searchSpotify(this.state.song)
        .then(({data}) => console.log(data));
  };

  render() {
    const { initialMessage, song } = this.state;
    console.log('song', song);
    return (
      <div>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {initialMessage}
      </div>
    );
  }
}
