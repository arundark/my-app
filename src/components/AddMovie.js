import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();
  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="movie name"
        variant="standard"
      />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="poster url"
        variant="standard"
      />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="summratingary"
        variant="standard"
      />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="summary"
        variant="standard"
      />
      <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };
          setMovieList([...movieList, newMovie]);
          navigate(-1);
        }}
        variant="contained"
      >
        Add movie
      </Button>
    </div>
  );
}
