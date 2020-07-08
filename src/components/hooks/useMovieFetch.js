import { useState, useEffect, useCallback } from "react";
import { API_URL, API_KEY } from "../../config";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const end = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const res = await (await fetch(end)).json();

      const creditsEnd = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditRes = await (await fetch(creditsEnd)).json();

      const directors = creditRes.crew.filter(
        (member) => member.job === "Director"
      );

      setState({
        ...res,
        actors: creditRes.cast,
        directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [movieId]);

  useEffect(() => {
    if (localStorage[movieId]) {
      setState(JSON.parse(localStorage[movieId]));
      setLoading(false)
    } else {
      fetchData();
    }
  }, [fetchData, movieId]);

  useEffect(() => {
    localStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);
  return [state, loading, error];
};
