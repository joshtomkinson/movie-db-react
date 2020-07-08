import React from "react";
import { StyledLoadMoreBtn } from "../styles/StyledLoadMoreBtn";
import PropTypes from "prop-types";
const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

//prop types to validate props
LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default LoadMoreBtn;
