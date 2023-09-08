import { useState } from "react";
import Star from "../Star/Star";
import "./StarRating.css";

interface StarRatingProps {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: React.Dispatch<React.SetStateAction<number>>;
}

function StarRating(props: StarRatingProps): JSX.Element {
  const {
    maxRating = 0,
    color = "#fcc419",
    size = 48,
    defaultRating = 0,
  } = props;

  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  const textStyle = {
    color,
    fontSize: `${size / 1.5}px`,
  };
  
  function handleRating(rating: number) {
    setRating(rating);
    props.onSetRating && props.onSetRating(rating);
  }

  return (
    <div className={`StarRating ${props.className}`}>
      <div className="star-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onClickEvent={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(rating)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p className="text-style" style={textStyle}>
        {props.messages?.length === maxRating
          ? props.messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
