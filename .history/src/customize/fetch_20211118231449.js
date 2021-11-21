import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // componentDidmount
  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step
    async function fetchData() {
      try {
        let reponse = await axios.get(url, {
          cancelToken: ourRequest.token, // <-- 2nd step
        });
        let data = reponse && reponse.data ? reponse.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 3000);
    return () => {
      ourRequest.cancel("Operation canceled by the user."); // <-- 3rd step
    };
  }, [url]);

  return {
    data,
    isloading,
    isError,
  };
};

export default useFetch;
