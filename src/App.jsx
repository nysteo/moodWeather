import React, {useState, useEffect} from 'react';
import {Typography, Grid, GridList, Box, makeStyles, Fade} from '@material-ui/core';
import loader from 'react-loader-spinner';

// import CurrentWeather from 'components/CurrentWeather';

const useStyles = makeStyles((theme) => ({
  container: { 
    height: '100vh',
    width: '100vw',
    maxWidth: '100vw',
    padding: '2rem 2rem 2rem 2rem',
    background: '#0E021E',
    color: '#FFF'
  }


}));

const App = (props) => {
  const apiLink= 'http://api.openweathermap.org/data/2.5';
  const apiKey = '6182a849c07816134daa9a1f469e1311';
  const [userLon, setUserLon] = useState(null);
  const [userLat, setUserLat] = useState(null);
  const [isRendered, setIsRendered] = useState(null);

  const [timeZone, setTimeZone] = useState('');
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState(null);

  const classes = useStyles();


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setUserLat(position.coords.latitude);
      setUserLon(position.coords.longitude);
    });
    if(userLat !== null && userLon !== null && isRendered !== true){
      setIsRendered(true);
      fetch(`${apiLink}/onecall?lat=${userLat}&lon=${userLon}&appid=${apiKey}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }})
        .then((res) => res.json())
        .then((res) => {
          setTimeZone(res.timezone);
          setCurrent(res.current);
          setHourly(res.hourly);
        },
        (error) => {
            console.log(error);
        });

    }
    console.log(current);
    console.log(userLat);
  });

  return (
    <Fade in timeout = {1000}>
      <div className = {classes.container}>
        <Grid container direction = 'row' spacing = {0} justify = 'center' alignItems = 'stretch' alignContent = 'stretch'>
          <Grid item>
            <Typography> Time Zone: {timeZone} </Typography>  
          </Grid> 
        </Grid>
      </div>
    </Fade>
  )
}


export default App;


