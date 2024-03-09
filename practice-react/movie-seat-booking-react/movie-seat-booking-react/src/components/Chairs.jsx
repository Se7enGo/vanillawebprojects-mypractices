import ChairRow from "./ChairRow";
import { BookingContext } from "../context/BookingContextProvider";
import { useContext } from "react";

export default function Chairs() {
  const { state } = useContext(BookingContext);

  let l = state.seats.length;
  let rowCount = l / 8;
  let frg = [];
  for (let index = 0; index < rowCount; index++) {
    frg.push(
      <ChairRow key={index} startNum={index * 8}>
        {" "}
      </ChairRow>
    );
  }
  return (
    <div className="chairs">
      <>{frg}</>
    </div>
  );
}
