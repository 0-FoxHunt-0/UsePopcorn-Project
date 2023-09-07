import { useState } from "react";
import WatchedModel from "../../../../Models/WatchedModel";
import Button from "../../../Reusables/Button/Button";
import "./WatchedMoviesList.css";
import WatchedSummary from "../WatchedSummary/WatchedSummary";
import WatchedList from "../WatchedList/WatchedList";

interface WatchedBoxProps {
  watched: WatchedModel[];
}

function WatchedBox(props: WatchedBoxProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="WatchedBox box">
      <Button
        className="btn-toggle"
        onClickEvent={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && (
        <>
          <WatchedSummary watched={props.watched} />
          <WatchedList watched={props.watched} />
        </>
      )}
    </div>
  );
}

export default WatchedBox;
