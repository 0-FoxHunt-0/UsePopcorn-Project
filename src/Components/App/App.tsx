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
  const [isWatched, setIsWatched] = useState<boolean>(false);

  function handleSelectMovie(movie: MovieModel): void {
    const watchedState: boolean = watched
      .map((movie) => movie.imdbID)
      .includes(movie.imdbID);
    setIsWatched(watchedState);
    setSelectedId(movie.imdbID === selectedId ? null : movie.imdbID);
  }

  function handleCloseMovie(): void {
    setSelectedId(null);
  }

  function handleAddWatched(movie: WatchedModel): void {
    const updatedWatched = [...watched];
    const watchedState: boolean = updatedWatched
      .map((movie) => movie.imdbID)
      .includes(movie.imdbID);

    if (watchedState)
      updatedWatched.find(
        (prevMovie) => prevMovie.imdbID === movie.imdbID
      ).userRating = movie.userRating;
    else updatedWatched.push(movie);

    setWatched(updatedWatched);
    setSelectedId(null);
  }

  function handleDeleteWatched(id: string): void {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    setIsLoading(true);
    setError("");
    const controller = new AbortController();

    moviesService
      .getMoviesBySearch(query, controller)
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        handleCloseMovie()
        setError("");
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
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
            <ErrorMessage message="Please enter a query search..." />
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
              isWatched={isWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                onDeleteWatched={handleDeleteWatched}
                watched={watched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
