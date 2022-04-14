import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { API } from "../global";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");
  const movieValidationSchema = yup.object({
    name: yup.string().required(),
    poster: yup
      .string()
      .min(4, "Need a longer poster")
      .required("fill the poster"),
    rating: yup
      .number()
      .min(0, "Need a higher rating")
      .max(10, "Too much rating")
      .required("fill the rating"),
    summary: yup
      .string()
      .min(20, "Need a longer summary")
      .required("fill the summary"),
    trailer: yup
      .string()
      .min(4, "Need a longer trailer")
      .required("fill the trailer"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovieObj) => {
      addNewMovie(newMovieObj);
    },
  });
  const navigate = useNavigate();
  const addNewMovie = (newMovieObj) => {
    console.log(newMovieObj);
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovieObj),
      headers: { "content-type": "application/json" },
    }).then(() => navigate("/movie"));
  };
  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
      <TextField
        // onChange={(event) => setName(event.target.value)}
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name}
        helperText={
          formik.touched.name && formik.errors.name ? formik.errors.name : ""
        }
        label="movie name"
        variant="standard"
      />
      <TextField
        // onChange={(event) => setPoster(event.target.value)}
        id="poster"
        name="poster"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.poster && formik.errors.poster}
        helperText={
          formik.touched.poster && formik.errors.poster
            ? formik.errors.poster
            : ""
        }
        label="poster url"
        variant="standard"
      />
      <TextField
        // onChange={(event) => setRating(event.target.value)}
        id="rating"
        name="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.rating && formik.errors.rating}
        helperText={
          formik.touched.rating && formik.errors.rating
            ? formik.errors.rating
            : ""
        }
        label="rating"
        variant="standard"
      />
      <TextField
        // onChange={(event) => setSummary(event.target.value)}
        id="summary"
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.summary && formik.errors.summary}
        helperText={
          formik.touched.summary && formik.errors.summary
            ? formik.errors.summary
            : ""
        }
        label="summary"
        variant="standard"
      />
      <TextField
        // onChange={(event) => setTrailer(event.target.value)}
        id="trailer"
        name="trailer"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={
          formik.touched.trailer && formik.errors.trailer
            ? formik.errors.trailer
            : ""
        }
        label="Trailer"
        variant="standard"
      />
      <Button type="submit" variant="contained">
        Add movie
      </Button>
    </form>
  );
}
