import WatchedModel from "../../../../Models/WatchedModel";
import WatchedMovie from "../WatchedMovie/WatchedMovie";
import "./WatchedList.css";

interface WatchedListProps {
  watched: WatchedModel[];
  onDeleteWatched: (id: string) => void;
}

function WatchedList(props: WatchedListProps): JSX.Element {
  return (
    <ul className="WatchedList list">
      {props.watched.map((movie) => (
        <WatchedMovie onDeleteWatched={props.onDeleteWatched} key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default WatchedList;
