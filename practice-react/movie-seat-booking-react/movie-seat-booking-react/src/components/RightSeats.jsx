import { BookingContext } from "../context/BookingContextProvider";
import { useContext } from "react";
export default function RightSeats({ startNum }) {
  const { handleClick, seatClass } = useContext(BookingContext);
  let startClass = seatClass(startNum);
  let nextClass = seatClass(startNum + 1);
  return (
    <div className="left">
      <span
        id={startNum}
        className={startClass}
        onClick={(e) => handleClick(e)}
      ></span>
      <span
        id={++startNum}
        className={nextClass}
        onClick={(e) => handleClick(e)}
      ></span>
    </div>
  );
}
