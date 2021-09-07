import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react';
import WhetherLogo from '../../images/logo.png'


const useStyles = makeStyles({
    appName: {
       paddingTop:50,
      
    },
    inputField: {
       paddingTop:50,
       paddingBottom:50
    },
    addCityBtn:{
        color:"#fff",
        backgroundColor:"#6b5dd3"
    },
    logo:{
        width:50,
        height:50
    },
    logoName:{
        color:"#fff",
    }
   

  });

const Header = () => {

   
      const classes = useStyles();
    return (
        
        <div>
            <Grid container
           
                direction="column"
                justifyContent="center"
                
                alignItems="center">
                <Grid direction="row" container  justifyContent="center" className={classes.appName}
                >
                <img className={classes.logo} src={WhetherLogo} alt="Array Icon"/>
                    <Typography className={classes.logoName} >Weather App</Typography>
                </Grid>
                <Grid  className={classes.inputField}>
                <TextField
                id="outlined-secondary"
                label="Enter a city"
                variant="outlined"
                disabled
                color="secondary"
                 />
            <Button className={classes.addCityBtn} variant="contained" color="secondary">
            Add City
            </Button>
                </Grid >
            </Grid>
        </div>
    )
}

export default Header
