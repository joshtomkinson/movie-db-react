import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

export const useHomeFetch = (searchItem) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);
    const isLoadMore = endpoint.search("page");

    try {
      const res = await (await fetch(endpoint)).json();

      setState((prev) => ({
        ...prev,

        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...res.results]
            : [...res.results],

        heroImage: prev.heroImage || res.results[1],
        currentPage: res.page,
        totalPages: res.total_pages,
      }));
    } catch (err) {
      setError(true);
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.homeState) {
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchItem) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchItem, state]);

  return [{ state, loading, error }, fetchMovies];
};
