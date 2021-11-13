import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // componentDidmount
  useEffect(async () => {
    try {
      let reponse = await axios.get(
        "https://api.covid19api.com/countryhhvietnam?from=2021-10-10T00:00:00Z&to=2021-11-11T00:00:00Z"
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
      setLoading(false);
      setIsError(true);
    } catch (e) {
      setIsError(false);
      alert(e.message);
    }
  }, []);
  return (
    <>
      <h3>Covid 19 tracking in VietNam</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}

          {loading === true && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
