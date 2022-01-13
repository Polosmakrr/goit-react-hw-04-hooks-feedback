import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Feedback = ({ options, onLeaveFeedback }) =>
  options.map((nameBtn) => (
    <Button key={nameBtn} nameBtn={nameBtn} onLeaveFeedback={onLeaveFeedback} />
  ));

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
