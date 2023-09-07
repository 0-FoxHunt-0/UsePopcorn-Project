import MovieModel from "../../Models/MovieModel";
import WatchedModel from "../../Models/WatchedModel";
import ListBox from "../ListsArea/MoviesArea/MovieList/MovieList";
import WatchedBox from "../ListsArea/WatchedArea/WatchedMoviesList/WatchedMoviesList";
import "./Main.css";

interface MainProps {
  movies: MovieModel[];
  watched: WatchedModel[];
}

function Main(props: MainProps): JSX.Element {
  return (
    <div className="Main">
      <main className="main">
        <ListBox movies={props.movies} />
        <WatchedBox watched={props.watched} />
      </main>
    </div>
  );
}

export default Main;
