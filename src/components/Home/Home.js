import React, { useState, useEffect } from "react";
import WhetherCard from "../WhetherCard/WhetherCard";
import axios from "axios";
import {  Grid, makeStyles } from "@material-ui/core";
import './Home.css';
// import Header from "../Header/Header";

const useStyles = makeStyles({
    root: {
  paddingLeft:35,
  paddingRight:35,
  margin:0
    },
    
  
  });

const Home = ({contryArray,setcontryArray}) => {
    const classes = useStyles();
   const url = 'http://api.openweathermap.org/data/2.5/group';
  const api_key = process.env.REACT_APP_WEATHERAPP;
  const [whetherData, setwhetherData] = useState(null);
  const params = {
    // id: "1248991,1850147,2644210,2988507,2147714,4930956,1796236,3143244",
    id:contryArray.toString(),
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
        setwhetherData(response.data.list);
        //handle success
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }, [contryArray]);


  return !whetherData ? (
    <Grid
    
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' ,width:'100%'}}
  >
  
    <Grid item xs={3}>
    {/* <CircularProgress /> */}
    </Grid>   </Grid>  
    
  ) : (
    <div>
         
      <Grid
        className={classes.root}
        container
        alignItems="stretch"
        spacing={5}

      >
        {whetherData.map((whetherSingleData) => (
          <Grid key={whetherSingleData._id} item xs={12} sm={12} md={6} lg={4}>
            <WhetherCard key={whetherSingleData._id} whetherData={whetherSingleData} contryArray={contryArray} setcontryArray={setcontryArray}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
