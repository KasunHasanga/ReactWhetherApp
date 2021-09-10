import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrayIcon from './../../images/arrow.png'
import Moment from 'react-moment';
import { Divider } from '@material-ui/core';
import cloudImage from './../../images/cloudnew.png'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // margin:0,
    
  },
  textHeader: {
    paddingBottom: 12,
    color:'#fff',
    textAlign:'center'
  }, 
  closeButton: {
    marginRight:15,
    color:'#fff',
    textAlign:'right'
  },
  textHeaderCountry: {
    marginBottom: 12,
    color:'#fff',
    fontSize:25,
    textAlign:'center'
  },
  textHeaderTemp: {
    marginBottom: 12,
    color:'#fff',
    fontSize:30,
    textAlign:'center'
  },
  bottom:{
    background:'#373b47',
    paddingLeft:10,
    paddingBottom:15,
    textAlign:'center'
    
  },
  top:{
    // margin:0,
    paddingLeft:20,
    paddingBottom:10,
    paddingTop:20,
    // backgroundImage:`url($cloudImage)`,
    // background:'#378de7',
    
  },
  text:{
    color:'#fff',
    textAlign:'center'
  },
  divider:{
    // minHeight: '80%',
    backgroundColor:'#fff',
    marginTop:20,
    marginBottom: 25
    // height:80%
  },arrayIcon:{
    display: 'flex',
   textAlign:'center',
   alignItems:'center',
    width: 50,
    justifyContent:'center'
  }
});

export default function WhetherCard({whetherData,setcontryArray,contryArray}) {


  const classes = useStyles();
    ///Clear Sky
    let clearSkyStyle ={
        background:"#40b681",
        backgroundImage:`url(${cloudImage})`,
        
    }
     ///Few Clouds
     let fewClods ={
      background:"#378de7",
      backgroundImage:`url(${cloudImage})`,
  }
     ///Broken Clouds
     let brokenClods ={
        background:"#6149cb",
        backgroundImage:`url(${cloudImage})`,
    }
     ///Light Ran
     let lightRan ={
        background:"#de934e",
        backgroundImage:`url(${cloudImage})`,
    }
    ///mist
    let mist ={
        background:"#9c3939",
        backgroundImage:`url(${cloudImage})`,
    }


  useEffect(() => {
    if(whetherData.weather[0]["description"]==="clear sky"){
        setStyle(clearSkyStyle);
     }else if(whetherData.weather[0]["description"]==="light rain"){
        setStyle(lightRan);
     }else if(whetherData.weather[0]["description"]==="few clouds"){
        setStyle(fewClods);
     }else if(whetherData.weather[0]["description"]==="broken clouds"){
        setStyle(brokenClods);
     }else if(whetherData.weather[0]["description"]==="mist"){
        setStyle(mist);
     }else{
      setStyle(clearSkyStyle);
     }
  }, [whetherData])
  const [style, setStyle] = useState(clearSkyStyle);
  
//   const handleRemove = (id) => {
//     const newcontryArray = contryArray.filter((countryId) => countryId.id !== id);
//  console.log(newcontryArray);
//  console.log("=====")
//     setcontryArray(newcontryArray);
//   };

///todo implement remove part
//   const removeCountry = event => {
//     event.preventDefault();
//     // setcontryArray(['1248991']);

//         const newcontryArray = contryArray.filter((countryId) => countryId.id !== whetherData.id);
//  console.log(newcontryArray);
//  console.log("=====")
//     setcontryArray(newcontryArray);
//     // handleRemove(whetherData.id);
// };


  return (
    <Card className={classes.root}>
      
     <Paper className={classes.top} style={ style}>
     {/* <div onClick={removeCountry}> */}
     <Typography className={classes.closeButton} color="textSecondary" >
        X
        </Typography>
     {/* </div> */}
     <Grid container spacing={3}>
        <Grid item xs={6} lg={6}>
        <Typography className={classes.textHeaderCountry} color="textSecondary">
        {whetherData.name},{whetherData.sys.country}
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
        <Moment  date={whetherData.dt} format="hh:mma , MMM D"/>
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
          <img src={`https://openweathermap.org/img/w/${whetherData.weather[0]["icon"]}.png`} alt={whetherData.weather[0]["description"]}/>{whetherData.weather[0]["description"]}
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography className={classes.textHeaderTemp} color="textSecondary">
        {Math.round(whetherData.main.temp)}&deg;C
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
        Temp Min : {Math.round(whetherData.main.temp_min)}&deg;C
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
        Temp Max : {Math.round(whetherData.main.temp_max)}&deg;C
        </Typography>
        </Grid>

      </Grid>
         </Paper>
      <Paper className={classes.bottom}>
          <Grid container spacing={3}>
          <Grid item xs={3}>
          <Typography className={classes.text} >
          Presure : {whetherData.main.pressure}hPa
        </Typography><Typography className={classes.text}  color="textSecondary">
          Humidity : {whetherData.main.humidity}%
        </Typography><Typography className={classes.text}  color="textSecondary">
          Visibility : {whetherData.visibility/1000}km
        </Typography>
        
        </Grid>
        <Divider className={classes.divider} variant="middle" orientation="vertical" flexItem />
        <Grid item xs={3}  alignItems="center"
  justifyContent="center">
        <img src={ArrayIcon} alt="Array Icon"  />
        <Typography className={classes.text}  color="textSecondary">
        {Math.round(whetherData.wind.speed*10)/10}m/s {whetherData.wind.deg} Degree
        </Typography>
        </Grid>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Grid item xs={3}>
        <Typography className={classes.text}  color="textSecondary">
          SunRise : <Moment  date={whetherData.sys.sunrise} format="hh:mm A"/>
        </Typography>
        <Typography className={classes.text}  color="textSecondary">
          Sunset : <Moment  date={whetherData.sys.sunset} format="hh:mm A"/>
        </Typography>
        </Grid>
          </Grid>
      </Paper>
      
       

    </Card>
  );
}
