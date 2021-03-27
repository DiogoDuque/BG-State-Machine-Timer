import React, { Component } from 'react';
import GoTStateMachine from './GoTStateMachine';
import SpiritIslandStateMachine from './SpiritIslandStateMachine';

class App extends Component {

  // setup states
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <SpiritIslandStateMachine/>
      </div>
    );
  }
}

export default App;
