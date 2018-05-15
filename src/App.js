import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput name='Susan'/> 
        <UserOutput name='Diane'/> 
        <UserOutput name='Kable'/> 
        <UserInput /> 
      </div>
    );
  }
}

export default App;
