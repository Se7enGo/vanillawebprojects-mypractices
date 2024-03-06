import CalculatorForm from "./CalculatorForm";
import Swap from "./Swap";
import { useEffect, useState } from "react";

export default function Content() {
  const [currentState1, setCurrentState1] = useState("USA");
  const [currentState2, setCurrentState2] = useState("EUR");

  const [currentValue1, setCurrentValue1] = useState(1);
  const [currentValue2, setCurrentValue2] = useState(1);

  const [rate, setRate] = useState(0);
  const [countries, setCountries] = useState([]);
  const [rates, setRates] = useState(new Map());

  useEffect(() => {
    fetch("https://open.exchangerate-api.com/v6/latest", {
      method: "GET",
    })
      .then((response) => response.json().then((json) => ({ json, response })))
      .then(({ json }) => {
        let ratesMap = new Map(Object.entries(json.rates));
        ratesMap.set("USA", 1);

        setRates(ratesMap);
        for (let key of ratesMap.keys()) {
          countries.push(key);
        }
        let uniqueCountries = new Set(countries);
        setCountries(Array.from(uniqueCountries));
        let rate1 = currentState1 === "USA" ? 1 : ratesMap.get(currentState1);
        let rate2 = currentState2 === "USA" ? 1 : ratesMap.get(currentState2);

        setCurrentValue1(ratesMap.get(currentState1));
        setCurrentValue2(ratesMap.get(currentState2));

        setRate(rate2 === 0 ? 0 : rate2 / rate1);
      });
  }, []);

  function calculator(state1, state2) {
    let rate1,
      rate2 = 0;

    for (let [key, value] of rates) {
      if (key === state1) {
        rate1 = value;
      }
      if (key === state2) {
        rate2 = value;
      }
    }

    let tempRate = rate1 === 0 ? 0 : rate2 / rate1;
    setRate(tempRate);
    return tempRate;
  }

  function handleSwapClick() {
    setCurrentState1(currentState2);
    setCurrentState2(currentState1);
    let tempRate = calculator(currentState2, currentState1);
    setCurrentValue2(currentValue1 * tempRate);
  }

  const rateString = "1 "
    .concat(currentState1)
    .concat(" = ")
    .concat(" " + rate)
    .concat(" " + currentState2);

  function handleChangeState1(changeState) {
    setCurrentState1(changeState);
    let tempRate = calculator(changeState, currentState2);
    setCurrentValue2(currentValue1 * tempRate);
  }

  function handleChangeState2(changeState) {
    setCurrentState2(changeState);
    let tempRate = calculator(currentState1, changeState);
    setCurrentValue2(currentValue1 * tempRate);
  }

  function handleChangeValue1(value) {
    setCurrentValue1(value);
    setCurrentValue2(value * rate);
  }

  function handleChangeValue2(value) {
    setCurrentValue2(value);
    setCurrentValue1(value / rate);
  }

  return (
    <div>
      <CalculatorForm
        countries={countries}
        currentState={currentState1}
        currentValue={currentValue1}
        onStateChange={handleChangeState1}
        onValueChange={handleChangeValue1}
      ></CalculatorForm>
      <Swap handleClick={handleSwapClick} swapString={rateString}></Swap>
      <CalculatorForm
        countries={countries}
        currentState={currentState2}
        currentValue={currentValue2}
        onStateChange={handleChangeState2}
        onValueChange={handleChangeValue2}
      ></CalculatorForm>
    </div>
  );
}
