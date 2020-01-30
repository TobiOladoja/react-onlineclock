import React, { Component } from 'react';
import Time from './components/Time';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Time />
      </div>
    );
  }
}

export default App;
