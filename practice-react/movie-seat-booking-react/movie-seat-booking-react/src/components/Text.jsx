import { useContext } from "react";
import { BookingContext } from "../context/BookingContextProvider";
export default function Text() {
  const { state } = useContext(BookingContext);

  return (
    <p>
      You have selected{" "}
      <span className="tickets">{state.selectedSeat.size}</span> seats for a
      price of $
      <span className="money">
        {state.selectedSeat.size * state.movies[state.pickedMovie].price}
      </span>
    </p>
  );
}
