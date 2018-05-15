import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: 'Max'
    };
  }

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value 
    })
  }
  render() {
    return (
      <div className="App">
        <UserOutput name= {this.state.username}/> 
        <UserOutput name={this.state.username}/> 
        <UserOutput name={this.state.username}/> 
        <UserInput onChange={this.nameChangeHandler.bind(this)} value={this.state.username}/> 
      </div>
    );
  }
}

export default App;
