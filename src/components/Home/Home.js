import React, { useState, useEffect } from "react";
import WhetherCard from "../WhetherCard/WhetherCard";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Home = () => {
  const url = "http://api.openweathermap.org/data/2.5/group";
  const api_key = "374ae00a2b8c9fd0840c0dcd7bc81eb7";
  const [whether, setWhether] = useState(null);
  const params = {
    id: "1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244",
    appid: api_key,
    units: "metric",
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: url,
      params: params,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then(function (response) {
        setWhether(response.data);
        //handle success
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, [url]);

  console.log(whether);
  console.log("-----------");
  return !whether ? (
    <CircularProgress />
  ) : (
    <div>
      <WhetherCard />

      
    </div>
  );
};

export default Home;
