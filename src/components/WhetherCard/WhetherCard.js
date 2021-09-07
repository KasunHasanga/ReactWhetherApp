import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrayIcon from './../../images/arrow.png'
import Moment from 'react-moment';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    
  },
  textHeader: {
    marginBottom: 12,
    color:'#fff',
  },
  textHeaderTemp: {
    marginBottom: 12,
    color:'#fff',
    fontSize:30
  },
  bottom:{
    background:'#373b47',
    paddingLeft:10
    
  },
  top:{
    background:'#378de7',
    paddingLeft:10
    
  },
  text:{
    color:'#fff',
    
  },
});

export default function WhetherCard({whetherData}) {
  const classes = useStyles();
  console.log(whetherData);

  return (
    <Card className={classes.root}>
      <CardContent>
      
     <Paper className={classes.top}>
     <Grid container spacing={3}>
        <Grid item xs={6} lg={6}>
        <Typography className={classes.textHeader} color="textSecondary">
        {whetherData.name},{whetherData.sys.country}
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
          Columbo Date
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
          {whetherData.weather.main}
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography className={classes.textHeaderTemp} color="textSecondary">
        {Math.round(whetherData.main.temp)}&deg;C
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
        Temp Min : {whetherData.main.temp_min}&deg;C
        </Typography>
        <Typography className={classes.textHeader} color="textSecondary">
        Temp Max : {whetherData.main.temp_max}&deg;C
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
        <Grid item xs={3}>
        <img src={ArrayIcon} alt="Array Icon"/>
        <Typography className={classes.text}  color="textSecondary">
          Data here
        </Typography>
        </Grid>
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
      
       
      </CardContent>

    </Card>
  );
}
