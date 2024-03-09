import { useContext } from "react";
import { BookingContext } from "../context/BookingContextProvider";
export default function Picker() {
  const { state, pickMovie } = useContext(BookingContext);

  return (
    <div className="picker">
      <span>Pick a movie: </span>
      <select
        value={state.pickedMovie}
        onChange={(e) => pickMovie(e.target.value)}
      >
        {state.movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.name} (${movie.price})
            </option>
          );
        })}
      </select>
    </div>
  );
}
