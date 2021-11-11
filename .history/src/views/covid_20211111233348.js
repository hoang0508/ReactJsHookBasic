import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  // componentDidmount
  useEffect(async () => {
    let reponse = await axios.get(
      "https://api.covid19api.com/country/vietnam?from=2021-10-10T00:00:00Z&to=2021-11-11T00:00:00Z"
    );
    let data = reponse && reponse.data ? reponse.data : [];
    setDataCovid(data);
  }, []);
  return (
    <table>
      {console.log(dataCovid)}
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
        {dataCovid &&
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
      </tbody>
    </table>
  );
};

export default Covid;
