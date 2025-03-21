import { useEffect, useRef, useState } from "react";

const defaultUrl = "http://localhost:5000/api/cms/";

const controller = new AbortController();
const signal = controller.signal;

const useData = ({ endpoint, options }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const fetchOptions = useRef(options);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL ?? defaultUrl}${endpoint}`;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url, fetchOptions.current, { signal });

        const jsonData = await response.json();

        if (!response.ok) {
          setIsError(true);
          setError(jsonData.error);
          return;
        }

        setData(jsonData);
        setIsError(false);
        setError(null);
      } catch (error) {
        setIsError(true);
        setError(error.message);
      }

      setIsLoading(false);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return {
    isLoading,
    isError,
    error,
    data,
  };
};

export default useData;
