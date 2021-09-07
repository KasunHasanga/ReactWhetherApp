import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrayIcon from './../../images/arrow.png'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background:'#'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bottom:{
    background:'#373b47',
    
  },
  bottomtext:{
    color:'#fff',
    
  },
});

export default function WhetherCard({whetherData}) {
  const classes = useStyles();
  console.log(whetherData);

  return (
    <Card className={classes.root}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={6} lg={6}>
        <Typography className={classes.pos} color="textSecondary">
          Columbo
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Columbo Date
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Whether Information
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography className={classes.pos} color="textSecondary">
          Temparature
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Temp Min
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Temp Max
        </Typography>
        </Grid>

      </Grid>
      <Paper className={classes.bottom}>
          <Grid container spacing={3}>
          <Grid item xs={3}>
          <Typography className={classes.bottomtext} >
          Presure
        </Typography><Typography className={classes.bottomtext}  color="textSecondary">
          Humidity
        </Typography><Typography className={classes.bottomtext}  color="textSecondary">
          Visibility
        </Typography>
        </Grid>
        <Grid item xs={3}>
        <img src={ArrayIcon} alt="Array Icon"/>
        <Typography className={classes.bottomtext}  color="textSecondary">
          Data here
        </Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography className={classes.bottomtext}  color="textSecondary">
          SunRise
        </Typography>
        <Typography className={classes.bottomtext}  color="textSecondary">
          Sunset
        </Typography>
        </Grid>
          </Grid>
      </Paper>
      
       
      </CardContent>

    </Card>
  );
}
