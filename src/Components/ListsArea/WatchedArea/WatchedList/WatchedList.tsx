import WatchedModel from "../../../../Models/WatchedModel";
import "./WatchedList.css";

interface WatchedListProps {
  watched: WatchedModel[];
}

function WatchedList(props: WatchedListProps): JSX.Element {
  return (
    <ul className="WatchedList list">
      {props.watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default WatchedList;
