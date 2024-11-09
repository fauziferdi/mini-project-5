import { useEffect, useState } from "react";
import { getSiswaById } from "../utils/api";

const useFetchById = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataById = async () => {
    setIsLoading(true);
    try {
      const response = await getSiswaById(id);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, fetchDataById, isLoading, error };
};

export default useFetchById;
