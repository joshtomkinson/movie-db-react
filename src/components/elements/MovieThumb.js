import React from "react";
import { Link } from "@reach/router";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import PropTypes from 'prop-types'

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
);

//proptypes to valide props
MovieThumb.propTypes = {
  image:PropTypes.string,
  movieId:PropTypes.number,
  clickable:PropTypes.bool,
}
export default MovieThumb;
