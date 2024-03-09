import LeftSeats from "./LeftSeats";
import RightSeats from "./RightSeats";
import MiddleSeats from "./MiddleSeats";

export default function ChairRow({ startNum }) {
  return (
    <div className="chairRow">
      <LeftSeats startNum={startNum}></LeftSeats>
      <MiddleSeats startNum={startNum + 2}></MiddleSeats>
      <RightSeats startNum={startNum + 6}></RightSeats>
    </div>
  );
}
