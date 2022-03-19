import "./step.css";

function Step({ info }) {
  return (
    <div className="step">
      <div className="step-title">{info.title}</div>
      <div className="step-text">{info.text}</div>
    </div>
  );
}

export default Step;
