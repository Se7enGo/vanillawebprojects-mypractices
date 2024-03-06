import money from "../img/money.png";
export default function Header() {
  return (
    <>
      <img src={money} alt="money"></img>
      <h1>Exchange Rate Calculator</h1>
      <h3>Choose the currency and the amounts to get the exchange rate</h3>
    </>
  );
}
