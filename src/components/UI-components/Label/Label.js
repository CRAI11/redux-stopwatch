import "./Label.css";

export default function Label(props) {
  return (
    <div className="label">
      <span>{props.lapTime}</span>
    </div>
  );
}
