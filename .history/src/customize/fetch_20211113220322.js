const useFetch = () => {
  // componentDidmount
  useEffect(() => {
    try {
      async function fetchData() {
        let reponse = await axios.get(
          "https://api.covid19api.com/country/vietnam?from=2021-10-10T00:00:00Z&to=2021-11-11T00:00:00Z"
        );
        let data = reponse && reponse.data ? reponse.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        setDataCovid(data);
        setIsLoading(false);
        setIsError(false);
      }
      fetchData();
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);
};

export default useFetch;
