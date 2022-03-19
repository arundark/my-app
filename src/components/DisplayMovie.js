import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API } from "../global";

export function DisplayMovie() {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const getData = () => {
    fetch(`${API}/movies`)
      .then((response) => response.json())
      .then((data) => setMovieList(data));
  };
  useEffect(() => getData(), []);
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie
          key={mv.id}
          movie={mv}
          id={mv.id}
          // movieList={movieList}
          // setMovieList={setMovieList}
          deletButton={
            <IconButton
              color="error"
              aria-label="delete movie"
              onClick={() => {
                fetch(`${API}/movies/${mv.id}`, { method: "DELETE" }).then(() =>
                  getData()
                );
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              color="secondary"
              aria-label="edit movie"
              onClick={() => {
                navigate(`/movie/edit/${mv.id}`);
              }}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
      {/* <AddColor /> */}
    </div>
  );
}
