import { useEffect, useState } from 'react';
// import { fetchMoviesByName } from './api';

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch: boolean) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [data, setData] = useState<T | null>(null);

  async function fetchData() {
    try {
      setIsLoading(true);

      const response = await fetchFunction();
      setData(response);
    } catch (error) {
      setError(true);
      console.log(`Error has occured ${error}`);
    }
  }

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, []);
  return { isLoading, error, data, refetch: fetchData };
};

export default useFetch;
