import React, { Component } from 'react';

import Time from './components/Time';
import Header from './components/Header';

class App extends Component {
  state = {
    time: new Date().toLocaleTimeString()
  };
  componentDidMount() {
    // create the interval once component is mounted
    this.update = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1 * 1000); // every 1 seconds
  }

  componentWillUnmount() {
    // delete the interval just before component is removed
    clearInterval(this.update);
  }

  render() {
    return (
      <div>
        <Header />
        <Time stateTime={this.state.time} />
      </div>
    );
  }
}

export default App;

// Hey, it's Tobi Oladoja. My thought process behind this digital clock:
// a setInterval to update the time
// a variable in the component's state for keeping track of the time
// a safe way of adding and removing the setInterval when the component mounts and unmounts respectively
