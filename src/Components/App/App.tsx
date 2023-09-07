import { useState } from "react";
import MovieModel from "../../Models/MovieModel";
import WatchedModel from "../../Models/WatchedModel";
import appConfig from "../../Utils/AppConfig";
import Main from "../Main/Main";
import Navbar from "../NavBarArea/Navbar/Navbar";
import "./App.css";

function App(): JSX.Element {
  const [movies, setMovies] = useState<MovieModel[]>(appConfig.tempMovieData);
  const [watched, setWatched] = useState<WatchedModel[]>(
    appConfig.tempWatchedData
  );

  return (
    <div className="App">
      <Navbar movies={movies} />
      <Main movies={movies} watched={watched} />
    </div>
  );
}

export default App;
