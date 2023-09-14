import { useEffect, useState } from "react";
import MovieModel from "../Models/MovieModel";
import moviesService from "../Services/MoviesService";

interface useMoviesProps {
  query: string;
  callback?: () => void;
}

export function useMovies({ query, callback }: useMoviesProps) {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
        // TODO: Figure out how to use useCallback and fix the dependency issue
        callback?.();
        setError("");
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
