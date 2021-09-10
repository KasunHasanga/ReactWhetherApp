import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
      background:'#373b47',
      padding:10 ,
      textAlign:'center'
      
    },
    footer :{
        
        paddingTop:60,
        bottom: 0,
        position: 'sticky'
      },
      text:{
          paddingTop:5,
          paddingBottom:5,
        color:'#fff',
      },
      textA:{
        color:'#fff',
        fontStyle:"none",
        textDecoration:"none"
      }

  });

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Paper className={classes.root} elevation={1}>
        
          <Typography className={classes.text}>
            <a href='https://fidenz.com/en/' className={classes.textA}>2021 Fidenz Technologies</a>
          </Typography>
        
        </Paper>
      </footer>
    )
}

export default Footer
