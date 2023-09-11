import { useState } from "react";
import "./Search.css";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search(props: SearchProps): JSX.Element {
  return (
    <input
      className="Search"
      type="text"
      placeholder="Search movies..."
      value={props.query}
      onChange={(e) => props.setQuery(e.target.value)}
    ></input>
  );
}

export default Search;
