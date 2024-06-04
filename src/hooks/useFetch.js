import { useEffect,useState } from "react";
export function useFetch(fetchFn){
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState();
    const [fetchData, setFetchData] = useState([]);
    
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await fetchFn();
        setFetchData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch user data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  return { isFetching , error , fetchData ,setFetchData }
}