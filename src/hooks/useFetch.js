import { useEffect, useState } from "react";
import { allSiswa } from "../utils/api";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await allSiswa();
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, fetchData, isLoading, error };
};

export default useFetch;
