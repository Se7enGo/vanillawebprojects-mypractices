import { useReducer } from "react";
import { createContext } from "react";
import CountdownContextReducer from "./CountdownContextReducer";

const initTime = { year: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

export const CountdownContext = createContext(initTime);
export default function CountdownContextProvider({ children }) {
  const [state, dispatch] = useReducer(CountdownContextReducer, initTime);

  function setYear(year) {
    dispatch({
      type: "SET_YEAR",
      payload: year,
    });
  }

  function setDays(days) {
    dispatch({
      type: "SET_DAY",
      payload: days,
    });
  }

  function setHours(hours) {
    dispatch({
      type: "SET_HOURS",
      payload: hours,
    });
  }

  function setMinutes(minutes) {
    dispatch({
      type: "SET_MINUTES",
      payload: minutes,
    });
  }

  function setSeconds(seconds) {
    dispatch({
      type: "SET_SECONDS",
      payload: seconds,
    });
  }
  return (
    <CountdownContext.Provider
      value={{
        states: state,
        setYear,
        setDays,
        setHours,
        setMinutes,
        setSeconds,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
