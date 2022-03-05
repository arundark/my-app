import { IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
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
