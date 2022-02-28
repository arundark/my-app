import { useParams } from "react-router-dom";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  return (
    <div>
      <h1>Welcome to {movie.name}</h1>
    </div>
  );
}
