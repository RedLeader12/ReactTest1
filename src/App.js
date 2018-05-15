import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput/> 
        <UserInput /> 
      </div>
    );
  }
}

export default App;
