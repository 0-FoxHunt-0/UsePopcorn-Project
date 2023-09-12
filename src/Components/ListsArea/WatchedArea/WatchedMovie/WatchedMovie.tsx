import WatchedModel from "../../../../Models/WatchedModel";
import "./WatchedMovie.css";

interface WatchedMovieProps {
  movie: WatchedModel;
  onDeleteWatched: (id: string) => void;
}

function WatchedMovie(props: WatchedMovieProps): JSX.Element {
  return (
    <li className="WatchedMovie">
      <img src={props.movie.Poster} alt={`${props.movie.Title} poster`} />
      <h3>{props.movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{props.movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{props.movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{props.movie.runtime} min</span>
        </p>
        <button onClick={() => props.onDeleteWatched(props.movie.imdbID)} className="btn-delete">❌</button>
      </div>
    </li>
  );
}

export default WatchedMovie;
