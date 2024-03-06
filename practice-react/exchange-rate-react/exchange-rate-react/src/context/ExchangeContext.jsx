import { createContext, useReducer } from "react";
import ExchangeRateReducer from "./ExchangeRateReducer.jsx";

const countries = [];
const rates = {};
const initContext = {
  countries: countries,
  rates: rates,
};
const ExchangeRateContext = createContext(initContext);

function ExchangeContextProvider({ children }) {
  const [state, dispatch] = useReducer(ExchangeRateReducer, initContext);

  function setRates(rates) {
    dispatch({
      type: "SET_RATES",
      rates: rates,
    });
  }

  function swap() {
    dispatch({
      type: "swap",
    });
  }

  function setCountries(countries) {
    dispatch({
      type: "SET_COUNTRIES",
      countries: countries,
    });
  }
  return (
    <ExchangeRateContext.Provider
      value={{
        state: state,
        swap: swap,
        setRates: setRates,
        setCountries: setCountries,
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
}
