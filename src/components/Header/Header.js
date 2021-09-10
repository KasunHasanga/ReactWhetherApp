import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React ,{useState}from 'react';
import WhetherLogo from '../../images/logo.png'


const useStyles = makeStyles({
    appName: {
       paddingTop:50,
    },
    inputField: {
       paddingTop:50,
       paddingBottom:50,
    },
    addCityBtn:{
        color:"#fff",
        backgroundColor:"#6b5dd3"  ,'&:hover': {
            background: "#6b5dd3" ,
         },
        
    },
    logo:{
        width:50,
        height:50
    },
    logoName:{
        color:"#fff",
        fontSize:30
    }
  });

const Header = ({contryArray,setcontryArray}) => {

   const [contry, setcontry] = useState("");
      const classes = useStyles();
      const countries= {"List":[{"CityCode":"1248991","CityName":"Colombo"},{"CityCode":"1850147","CityName":"Tokyo"},{"CityCode":"2644210","CityName":"Liverpool"},{"CityCode":"2988507","CityName":"Paris"},{"CityCode":"2147714","CityName":"Sydney"},{"CityCode":"4930956","CityName":"Boston"},{"CityCode":"1796236","CityName":"Shanghai"},{"CityCode":"3143244","CityName":"Oslo"}]};
      const handleCityChange = event => {
        event.preventDefault();
        const countryCount=8
        for (let i=0;i<countryCount;i++){
            if(contry===countries.List[i].CityName){
                if(contryArray.includes(countries.List[i].CityCode)){
                }else{
                    setcontryArray([...contryArray,countries.List[i].CityCode]);
                }
          }
        }
    };

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
                <Grid  className={classes.inputField} direction="row" container  justifyContent="center"
                alignItems="stretch">
                <TextField
                id="outlined-secondary"
                label="Enter a city"
                variant="filled"
                value= {contry}
            onChange= {(e)=>setcontry(e.target.value)}
                 />
            <Button onClick={handleCityChange} className={classes.addCityBtn} variant="contained" color="secondary" >
            Add City
            </Button>
                </Grid >
            </Grid>
        </div>
    )
}

export default Header
