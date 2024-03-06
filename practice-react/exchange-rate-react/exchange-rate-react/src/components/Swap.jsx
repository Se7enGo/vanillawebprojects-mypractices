export default function Swap({ handleClick, swapString }) {
  return (
    <div className="swap">
      <button onClick={handleClick}>Swap</button>
      <span>{swapString}</span>
    </div>
  );
}
