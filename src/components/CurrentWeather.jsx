import React, {useState} from 'react';
import {Grid, Typography, Box, Link, GridList, makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));




const CurrentWeather = (props) => {
    const classes = makeStyles();

    return (
        <div className = {classes.container}>
            <Grid container direction = 'row' alignItems = 'stretch' alignContent = 'stretch' spacing = {0}>
                <Grid item>
                    <Typography>This is the CurrentWeather Component</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CurrentWeather;