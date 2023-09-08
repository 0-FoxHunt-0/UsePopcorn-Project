import MovieModel from "../../../../Models/MovieModel";
import Movie from "../Movie/Movie";
import "./MovieList.css";

interface MovieListProps {
  movies: MovieModel[];
}

function MovieList(props: MovieListProps): JSX.Element {
  return (
    <ul className="MovieList list">
      {props.movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
