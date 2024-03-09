import { useState } from "react";

export default function Foot(params) {
  const [year, setYear] = useState(0);
  function setTimes() {
    let now = new Date();
    let year = now.getFullYear();
    let nextYear = year + 1;
    setYear(nextYear);
  }
  setTimeout(() => {
    setTimes();
  }, 500);
  const frag =
    year === 0 ? (
      <div className="foot"></div>
    ) : (
      <div className="foot"> {year} </div>
    );

  return frag;
}
