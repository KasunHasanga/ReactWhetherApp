
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import backgroundImage from './images/backgroundImage.png'

const useStyles = makeStyles({
  root: {
    backgroundImage:`url(${backgroundImage})`,
    // backgroundSize: 'auto',
    // width: "100%",
    // height: "100%",
    backgroundColor:'#1f2128',
    backgroundRepeat:'no-repeat',
    backgroundPosition: "center top",
    // backgroundSize: "fixed",
    // background:'#1f2128',
  },
});

function App() {
  const classes = useStyles();
  const [contryArray, setcontryArray] = useState([]);
  return (
    <div  className={classes.root}>
    <Header contryArray={contryArray} setcontryArray={setcontryArray}/>
    <Home contryArray={contryArray} setcontryArray={setcontryArray}/>
    <Footer/>
    </div>
  );
}

export default App;
