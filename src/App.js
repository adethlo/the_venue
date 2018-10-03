import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: '100vh', backgroundColor: 'blue'}}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
