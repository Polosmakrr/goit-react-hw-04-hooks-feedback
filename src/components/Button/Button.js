import React from "react";
import PropTypes from "prop-types";

const Button = ({ nameBtn, onLeaveFeedback }) => {
  return (
    <button onClick={() => onLeaveFeedback(nameBtn)} type="button">
      {nameBtn}
    </button>
  );
};

Button.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Button;
