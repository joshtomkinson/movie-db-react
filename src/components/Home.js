import React, { useState } from "react";
//import api config info
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  IMAGE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from "../config";

//import all components for the home page
import Grid from "./elements/Grid";
import Header from "./elements/Header";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";


import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [searchItem, setSearchItem] = useState("");
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchItem);

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchItem(search);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const afterSearch = `${SEARCH_BASE_URL}${searchItem}&page=${
      currentPage + 1
    }`;
    const popularEnd = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
    const end = searchItem ? afterSearch : popularEnd;

    fetchMovies(end);
  };

  if (error) return <div>Something went wrong</div>;
  if (!movies[0]) return <Spinner />;
  return (
    <>
      {!searchItem && (
        <HeroImage
          image={`${IMAGE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <Grid header={searchItem ? "Search Result" : "Trending Movies"}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>

      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load more" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
