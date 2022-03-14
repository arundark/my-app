import { IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { API } from "../global";

export function MovieDetails() {
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-details-container ">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐ {movie.rating}</p>
          {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          variant="contained"
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
