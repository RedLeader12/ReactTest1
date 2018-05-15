import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      <div className="App">
        <UserOutput name= {this.state.username}/> 
        <UserOutput name={this.state.username}/> 
        <UserOutput name={this.state.username}/> 
        <UserInput /> 
      </div>
    );
  }
}

export default App;
