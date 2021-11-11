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
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Covid;
