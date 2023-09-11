import WatchedModel from "../../../../Models/WatchedModel";
import "./WatchedSummary.css";

interface WatchedSummaryProps {
  watched: WatchedModel[];
}

function WatchedSummary(props: WatchedSummaryProps): JSX.Element {
  const average: (arr: number[]) => number = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating: number = average(
    props.watched.map((movie) => movie.imdbRating)
  );
  const avgUserRating: number = average(
    props.watched.map((movie) => movie.userRating)
  );
  const avgRuntime: number = average(
    props.watched.map((movie) => movie.runtime)
  );
  return (
    <div className="WatchedSummary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{props.watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
