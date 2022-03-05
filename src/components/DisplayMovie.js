import { Movie } from "./Movie";

export function DisplayMovie({ movieList, setMovieList }) {
  return (
    <div className="movie-list">
      {movieList.map((mv, index) => (
        <Movie
          key={index}
          movie={mv}
          id={index}
          movieList={movieList}
          setMovieList={setMovieList}
        />
      ))}
      {/* <AddColor /> */}
    </div>
  );
}
