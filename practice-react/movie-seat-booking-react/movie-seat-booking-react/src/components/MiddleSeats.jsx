import { BookingContext } from "../context/BookingContextProvider";
import { useContext } from "react";
export default function MiddleSeats({ startNum }) {
  console.log("startNum :>> ", startNum);
  const { handleClick, seatClass } = useContext(BookingContext);
  const firstClass = seatClass(startNum);
  const secondClass = seatClass(startNum + 1);
  const thirdClass = seatClass(startNum + 2);
  const fouthClass = seatClass(startNum + 3);
  return (
    <div className="middle">
      <span
        id={startNum}
        className={firstClass}
        onClick={(e) => handleClick(e)}
      ></span>
      <span
        id={++startNum}
        className={secondClass}
        onClick={(e) => handleClick(e)}
      ></span>
      <span
        id={++startNum}
        className={thirdClass}
        onClick={(e) => handleClick(e)}
      ></span>
      <span
        id={++startNum}
        className={fouthClass}
        onClick={(e) => handleClick(e)}
      ></span>
    </div>
  );
}
