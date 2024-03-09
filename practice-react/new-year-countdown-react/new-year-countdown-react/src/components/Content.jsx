import Time from "./Time.jsx";
import spinner from "../img/spinner.gif";
import { useState } from "react";

export default function Content() {
  const [days, setDays] = useState("0");
  const [hours, setHours] = useState("0");
  const [minutes, setMinutes] = useState("0");
  const [seconds, setSeconds] = useState("0");

  function setTimes() {
    let now = new Date();
    let year = now.getFullYear();
    let nextYear = year + 1;
    let nextYearFistDay = new Date(nextYear, 0, 0, 0, 0, 0, 0);
    let nyfTime = nextYearFistDay.getTime();
    let nowTime = now.getTime();
    let oneDayTime = 24 * 60 * 60 * 1000;
    let oneHourTime = 60 * 60 * 1000;
    let oneMinuteTime = 60 * 1000;
    let days = Math.floor((nyfTime - nowTime) / oneDayTime);
    setDays(days);

    let hours = Math.floor(
      (nyfTime - nowTime - oneDayTime * days) / oneHourTime
    );
    hours = getShowtime(hours);
    setHours(hours);
    let minutes = Math.floor(
      (nyfTime - nowTime - oneDayTime * days - oneHourTime * hours) /
        (60 * 1000)
    );
    minutes = getShowtime(minutes);
    setMinutes(minutes);
    let seconds = Math.floor(
      (nyfTime -
        nowTime -
        oneDayTime * days -
        oneHourTime * hours -
        oneMinuteTime * minutes) /
        1000
    );
    seconds = getShowtime(seconds);
    setSeconds(seconds);
  }

  function getShowtime(time) {
    return time < 10 ? "0" + time : time + "";
  }
  setTimeout(() => {
    setInterval(() => {
      setTimes();
    }, 500);
  }, 1000);

  const frag =
    days !== 0 ? (
      <div className="content">
        <Time value={days} name={"days"}></Time>
        <Time value={hours} name={"hours"}></Time>
        <Time value={minutes} name={"minutes"}></Time>
        <Time value={seconds} name={"seconds"}></Time>
      </div>
    ) : (
      <img src={spinner}></img>
    );
  return frag;
}
