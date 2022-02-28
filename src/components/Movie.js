import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";

export function Movie({ movie, id }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  const paraStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">
          {movie.name}
          <IconButton
            aria-label="Toggle description"
            onClick={() => setShow(!show)}
            className="bt-sz-lg"
            color="primary"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton
            aria-label="Movie Details"
            onClick={() => navigate(`/movie/${id}`)}
            className="bt-sz-lg"
            color="primary"
          >
            <InfoIcon />
          </IconButton>
        </h2>
        <p style={styles} className="movie-rating">
          ⭐ {movie.rating}
        </p>
        {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
      </div>
      <p style={paraStyles} className="movie-summary">
        {movie.summary}
      </p>
      <Counter />
    </div>
  );
}
