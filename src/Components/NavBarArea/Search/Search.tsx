import { useState } from "react";
import "./Search.css";

function Search(): JSX.Element {
  const [query, setQuery] = useState<string>("");

  return (
    <input
      className="Search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}

export default Search;
