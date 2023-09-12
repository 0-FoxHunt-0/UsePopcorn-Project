import MovieModel from "../../../../Models/MovieModel";
import Movie from "../Movie/Movie";
import "./MovieList.css";

interface MovieListProps {
  movies: MovieModel[];
  onSelectMovie: (movie: MovieModel) => void;
}

function MovieList(props: MovieListProps): JSX.Element {
  return (
    <ul className="MovieList list list-movies">
      {props.movies?.map((movie) => (
        <Movie onSelectMovie={props.onSelectMovie} key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
