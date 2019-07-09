import React, { Component } from 'react';
import Header from './components/header';
import Search from './components/search';

class App extends Component {

  render() {
    return (
      <div id="root" className="container">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;

