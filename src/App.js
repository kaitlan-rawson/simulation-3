import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
    this.state = {
    recFriends: [] 
    }
  }

  componentDidMount(){
    axios.get('/sim3/recFriends')
    .then(res => {
      console.log(res.data)
      this.setState({
        recFriends: res.data
      })
    })
  }

  render() {
    let recFriends = this.state.recFriends.map(val => {
      return (
        <div> 
          {val.username}
        </div>
      )
    })

    return (
      <div className="App">
        {recFriends}
      </div>
    );
  }
}

export default App;
