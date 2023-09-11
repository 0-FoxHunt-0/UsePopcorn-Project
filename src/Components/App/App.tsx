import { useEffect, useState } from "react";

import MovieModel from "../../Models/MovieModel";
import WatchedModel from "../../Models/WatchedModel";
import Main from "../Main/Main";
import Navbar from "../NavBarArea/Navbar/Navbar";
import NumResults from "../NavBarArea/NumResults/NumResults";
import Search from "../NavBarArea/Search/Search";

import moviesService from "../../Services/MoviesService";
import MovieList from "../ListsArea/MoviesArea/MovieList/MovieList";
import SelectedMovie from "../ListsArea/MoviesArea/SelectedMovie/SelectedMovie";
import WatchedList from "../ListsArea/WatchedArea/WatchedList/WatchedList";
import WatchedSummary from "../ListsArea/WatchedArea/WatchedSummary/WatchedSummary";
import Box from "../Reusables/Box/Box";
import ErrorMessage from "../Reusables/ErrorMessage/ErrorMessage";
import Loader from "../Reusables/Loader/Loader";
import "./App.css";

function App(): JSX.Element {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [watched, setWatched] = useState<WatchedModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [selectedId, setSelectedId] = useState<string>(null);

  function handleSelectMovie(id: string): void {
    setSelectedId(id === selectedId ? null : id);
  }

  function handleCloseMovie(): void {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedModel): void {
    setWatched((watched) => [...watched, movie]);
    setSelectedId(null);
  }

  useEffect(() => {
    setIsLoading(true);
    setError("");

    moviesService
      .getMoviesBySearch(query)
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => console.log("Effect cleanup");
  }, [query]);

  return (
    <div className="App">
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {query.length === 0 && (
            <ErrorMessage message="Please enter a query Search..." />
          )}
          {!isLoading && !error && (
            <MovieList
              onSelectMovie={handleSelectMovie}
              movies={movies}
            ></MovieList>
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              selectedId={selectedId}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
