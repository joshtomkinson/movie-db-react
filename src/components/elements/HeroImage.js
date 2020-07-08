import React from "react";
import styled from "styled-components";
import { StyledHeroImage } from "../styles/StyledHeroImage";
import PropTypes from "prop-types";

const HeroImage = ({ image, title, text }) => (
  <StyledHeroImage image={image}>
    <div className="heroimage-conent">
      <div className="heroimage-text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </StyledHeroImage>
);

//prop types to validate props
HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImage;
