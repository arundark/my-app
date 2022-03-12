import { Movie } from "./Movie";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function DisplayMovie({ movieList, setMovieList }) {
  const navigate = useNavigate();
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie
          key={index}
          movie={mv}
          id={index}
          // movieList={movieList}
          // setMovieList={setMovieList}
          deletButton={
            <IconButton
              color="error"
              aria-label="delete movie"
              onClick={() => {
                const updatedMovieList = [...movieList];
                updatedMovieList.splice(index, 1);
                setMovieList([...updatedMovieList]);
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
                navigate(`/movie/edit/${index}`);
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
