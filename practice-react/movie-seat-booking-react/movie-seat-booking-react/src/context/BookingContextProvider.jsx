import { createContext, useReducer } from "react";
import BookingContextReducer from "./BookingContextReducer";

const movies = [
  {
    id: 0,
    name: "Toye Story 4",
    price: 8,
  },
  {
    id: 1,
    name: "Joker",
    price: 12,
  },
  {
    id: 2,
    name: "Avengers:Endgame",
    price: 10,
  },
  {
    id: 3,
    name: "The Lion King",
    price: 9,
  },
];
const pickedMovie = movies[0].id;
const seats = new Array(48);
const occupledSeat = new Set();
const selectedSeat = new Set();
const seleng = Math.round(seats.length * 0.1);

console.log("occupledSeat.size :>> ", occupledSeat.size);

while (occupledSeat.size < seleng) {
  let next = Math.floor(seats.length * Math.random());
  let f = occupledSeat.has(next);
  if (f) {
    continue;
  } else {
    occupledSeat.add(next);
  }
}

for (let i = 0; i < seats.length; i++) {
  let f = occupledSeat.has(i);
  if (f) {
    seats[i] = {
      id: i,
      state: "Occupied",
    };
  } else {
    seats[i] = {
      id: i,
      state: "N/A",
    };
  }
}

const initContext = {
  selectedSeat: selectedSeat,
  pickedMovie: pickedMovie,
  movies: movies,
  seats: seats,
  occupledSeat: occupledSeat,
};
export const BookingContext = createContext(initContext);

export default function BookingContextProvider({ children }) {
  const [state, dispatch] = useReducer(BookingContextReducer, initContext);

  function pickMovie(movieId) {
    dispatch({
      type: "PICK_MOVIE",
      payload: movieId,
    });
  }
  function selectSeat(seatIndex) {
    dispatch({
      type: "SELECT_SEAT",
      payload: seatIndex,
    });
  }

  function handleClick(e) {
    if (state.occupledSeat.has(parseInt(e.target.id))) {
      return;
    }
    if (state.selectedSeat.has(parseInt(e.target.id))) {
      selectSeat(parseInt(e.target.id));
      e.target.className = "btn";
    } else {
      selectSeat(parseInt(e.target.id));
      e.target.className = "btn selected";
    }
  }

  function seatClass(seatIndex) {
    if (state.occupledSeat.has(parseInt(seatIndex))) {
      return "btn occupied";
    } else if (state.selectedSeat.has(parseInt(seatIndex))) {
      return "btn selected";
    } else {
      return "btn";
    }
  }
  return (
    <BookingContext.Provider
      value={{ state: state, handleClick, pickMovie, selectSeat, seatClass }}
    >
      {children}
    </BookingContext.Provider>
  );
}
