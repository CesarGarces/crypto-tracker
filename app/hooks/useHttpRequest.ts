'use client'
import { useState, useEffect } from "react";
const useHttpRequest = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data.data ? data.data : data);
      } catch (error) {
        setError(error as Object);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData().catch(console.error);
  }, [url])

  return { data, isLoading, error }
}

export default useHttpRequest;