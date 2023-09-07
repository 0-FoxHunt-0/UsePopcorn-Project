import MovieModel from "../../../../Models/MovieModel";
import "./Movie.css";

interface MovieProps {
  movie: MovieModel;
}

function Movie(props: MovieProps): JSX.Element {
  return (
    <li className="Movie">
      <img src={props.movie.Poster} alt={`${props.movie.Title} poster`} />
      <h3>{props.movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{props.movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
