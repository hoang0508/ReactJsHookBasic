import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // componentDidmount
  useEffect(() => {
    try {
      async function fetchData() {
        let reponse = await axios.get(url);
        let data = reponse && reponse.data ? reponse.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setData(data);
        setIsLoading(false);
        setIsError(false);
      }
      setTimeout(() => {
        fetchData();
      }, 3000);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isloading,
    isError,
  };
};

export default useFetch;
