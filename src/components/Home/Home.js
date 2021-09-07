import React, { useState, useEffect } from "react";
import WhetherCard from "../WhetherCard/WhetherCard";
import axios from "axios";
import { CircularProgress, Grid } from "@material-ui/core";

const Home = () => {
  const url = "http://api.openweathermap.org/data/2.5/group";
  const api_key = "374ae00a2b8c9fd0840c0dcd7bc81eb7";
  const [whetherData, setwhetherData] = useState(null);
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
        setwhetherData((response.data.list));
        //handle success
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, [url]);

  console.log("-----------");
  console.log(whetherData);
  console.log("-----------");
  return !whetherData ? (
    <CircularProgress />
  ) : (
    <div>
        <Grid
    //   className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
{whetherData.map((whetherSingleData) => (
        // <Grid key={whetherSingleData._id} item xs={12} sm={6} md={6} lg={3}>
         
        // </Grid>
        <WhetherCard whetherData={whetherSingleData}/>
      ))}
        </Grid>
      
      
      
    </div>
  );
};

export default Home;
