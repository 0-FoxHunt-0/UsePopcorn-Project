import MovieModel from "../../../Models/MovieModel";
import "./NumResults.css";

interface NumResultsProps {
    movies: MovieModel[];
}

function NumResults(props: NumResultsProps): JSX.Element {
  return (
    <div className="NumResults">
      Found <strong>{props.movies.length}</strong> results
    </div>
  );
}

export default NumResults;
