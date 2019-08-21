import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {


  // estado inicial
  state = {
    filmes: [],
  }

  async componentDidMount() {
    const api = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=e5693481ef000bfdd855a0f21ad39631&language=en-US");
    this.setState({
      filmes: api.data.results,
    })
  }


  render() {
    return (
      <ul>
        {this.state.filmes.map(movie => <li>{movie.title}</li>)}
      </ul>
    );
  }

}

export default App;