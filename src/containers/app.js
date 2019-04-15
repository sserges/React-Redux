import React, { Component } from "react";
import axios from "axios";

import SearchBar from "../components/search-bar";
import VideoList from "./video-list";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=99d5c07a8ee24ca22a2ba584278397e4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: {},
      currentMovie: {}
    };
  }

  componentWillMount() {
    axios
      .get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`)
      .then(response => {
        console.log(response);
        this.setState({ movieList: response.data.results.slice(1, 6) });
        this.setState({ currentMovie: response.data.results[0] });
        console.log(this.state);
      });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
