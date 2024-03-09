export default function Time({ value, name }) {
  return (
    <div className="time">
      <span>{value}</span>
      <br></br>
      <h6>{name}</h6>
    </div>
  );
}
