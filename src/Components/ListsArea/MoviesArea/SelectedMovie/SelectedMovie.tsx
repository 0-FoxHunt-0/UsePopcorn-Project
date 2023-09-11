import { useEffect, useState } from "react";
import "./SelectedMovie.css";
import moviesService from "../../../../Services/MoviesService";
import SelectedMovieModel from "../../../../Models/SelectedMovieModel";
import Loader from "../../../Reusables/Loader/Loader";
import StarRating from "../../../StarRatingArea/StarRating/StarRating";
import WatchedModel from "../../../../Models/WatchedModel";

interface SelectedMovieProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedModel) => void;
}

function SelectedMovie(props: SelectedMovieProps): JSX.Element {
  const [movie, setMovie] = useState<SelectedMovieModel>(
    new SelectedMovieModel()
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);

    moviesService
      .getMovieDetails(props.selectedId)
      .then((movie) => {
        setMovie(movie);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [props.selectedId]);

  function handleAdd() {
    const newWatchedMovie: WatchedModel = {
      imdbID: movie.imdbRating,
      Poster: movie.Poster,
      Title: movie.Title,
      imdbRating: +movie.imdbRating,
      runtime: +movie.Runtime.slice().split(" ")[0],
      userRating: rating,
      Year: movie.Year,
    };

    props.onAddWatched(newWatchedMovie);
    
  }

  return (
    <div className="SelectedMovie details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button onClick={props.onCloseMovie} className="btn-back">
              🡨
            </button>
            <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.ReleaseDate} &bull; {movie.Runtime}
              </p>
              <p>{movie.Genre}</p>
              <p>
                <span>⭐</span>
                {movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarRating onSetRating={setRating} maxRating={10} size={24} />

              <button onClick={handleAdd} className="btn-add">
                + Add to list
              </button>
            </div>
            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>Starring {movie.Actors}</p>
            <p>Directed by {movie.Director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default SelectedMovie;
