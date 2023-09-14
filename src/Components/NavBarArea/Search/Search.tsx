import { useEffect, useRef } from "react";
import "./Search.css";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search(props: SearchProps): JSX.Element {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function callback(e: KeyboardEvent): void {
      switch (e.code) {
        case "Escape":
          return;
        case "Enter":
          if (document.activeElement === inputEl.current)
            inputEl.current.blur();
          else {
            props.setQuery("");
            inputEl.current.focus();
          }
          break;
        default:
          inputEl.current.focus();
          break;
      }
    }

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [props]);

  return (
    <input
      className="Search"
      type="text"
      placeholder="Search movies..."
      value={props.query}
      onChange={(e) => props.setQuery(e.target.value)}
      ref={inputEl}
    ></input>
  );
}

export default Search;
