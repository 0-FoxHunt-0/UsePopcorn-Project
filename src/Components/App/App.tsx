import { useState } from "react";

import MovieModel from "../../Models/MovieModel";
import WatchedModel from "../../Models/WatchedModel";
import appConfig from "../../Utils/AppConfig";
import Main from "../Main/Main";
import Navbar from "../NavBarArea/Navbar/Navbar";
import NumResults from "../NavBarArea/NumResults/NumResults";
import Search from "../NavBarArea/Search/Search";

import MovieList from "../ListsArea/MoviesArea/MovieList/MovieList";
import WatchedList from "../ListsArea/WatchedArea/WatchedList/WatchedList";
import WatchedSummary from "../ListsArea/WatchedArea/WatchedSummary/WatchedSummary";
import Box from "../Reusables/Box/Box";
import "./App.css";

function App(): JSX.Element {
  const [movies, setMovies] = useState<MovieModel[]>(appConfig.tempMovieData);
  const [watched, setWatched] = useState<WatchedModel[]>(
    appConfig.tempWatchedData
  );

  return (
    <div className="App">
      <Navbar>
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies}></MovieList>
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

export default App;
