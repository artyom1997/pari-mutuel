import "./step.css";
import PropTypes from "prop-types";


function Step({ info }) {
  return (
    <div className="step">
      <div className="step-title">{info.title}</div>
      <div className="step-text">{info.text}</div>
    </div>
  );
}

Step.propTypes = {
  info: PropTypes.object,
};

Step.defaultProps = {
  info: {
    title: "",
    subtitle: "",
  },
};

export default Step;
