export default function CalculatorForm({
  countries,
  currentState,
  currentValue,
  onStateChange,
  onValueChange,
}) {
  return (
    <>
      <form>
        <select
          value={currentState}
          onChange={(e) => onStateChange(e.target.value)}
        >
          {countries.map((country) => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          placeholder="0"
          value={currentValue}
          onChange={(e) => onValueChange(e.target.value)}
        ></input>
      </form>
    </>
  );
}
