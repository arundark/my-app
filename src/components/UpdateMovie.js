import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../global";

export function UpdateMovie() {
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return movie ? <EditMovie movie={movie} /> : "Loading...";
}

function EditMovie({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const navigate = useNavigate();
  return (
    <div className="add-movie-form">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="movie name"
        variant="outlined"
      />
      <TextField
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        label="poster url"
        variant="outlined"
      />
      <TextField
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        label="summratingary"
        variant="outlined"
      />
      <TextField
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        label="summary"
        variant="outlined"
      />
      <TextField
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
        label="Trailer"
        variant="outlined"
      />
      <Button
        onClick={() => {
          const updateMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updateMovie),
            headers: { "content-type": "application/json" },
          }).then(() => navigate("/movie"));
        }}
        variant="contained"
      >
        SAVE
      </Button>
    </div>
  );
}
