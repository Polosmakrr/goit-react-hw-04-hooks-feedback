import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

Section.defaultProps = {
  title: "Here is your Title",
};

export default Section;
