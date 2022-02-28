import { Movie } from "./Movie";

export function DisplayMovie({ movieList }) {
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie key={index} movie={mv} id={index} />
      ))}
      {/* <AddColor /> */}
    </div>
  );
}
