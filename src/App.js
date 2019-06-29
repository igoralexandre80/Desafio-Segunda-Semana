import React, { Component } from 'react';
import './App.css';
import Cards from './Cards.js'
const API_URL = "https://jsonplaceholder.typicode.com/posts";

class App extends Component {

  // estado inicial
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch(API_URL)
    .then(result => {return result.json()})
    .then(data => {
      this.setState({
        posts: data
      })
    })
  }

  render() {  
    console.log(this.state.posts);
    return (
      <div>
        <Cards posts={this.state.posts} />
      </div>
    )
  }

}

export default App;