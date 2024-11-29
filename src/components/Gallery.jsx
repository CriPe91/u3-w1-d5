import { Component } from "react";

class Gallery extends Component {
  state = {
    movies: [],
  };

  Movies = () => {
    fetch("http://www.omdbapi.com/?apikey=28a9b9e8&s=Harry Potter")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((movie) => {
        console.log(movie);
        if (movie.Search) {
          this.setState({ movies: movie.Search });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.Movies();
  }

  render() {
    return {};
  }
}
export default Gallery;
