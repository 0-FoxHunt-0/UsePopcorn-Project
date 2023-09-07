import { useState } from "react";
import Button from "../../../Reusables/Button/Button";
import "./MovieList.css";
import MovieModel from "../../../../Models/MovieModel";
import Movie from "../Movie/Movie";

interface ListBoxProps {
  movies: MovieModel[];
}

function ListBox(props: ListBoxProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="ListBox box">
      <Button
        className="btn-toggle"
        onClickEvent={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && (
        <ul className="list">
          {props.movies?.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListBox;
