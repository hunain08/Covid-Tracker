/** @format */

import React from "react";
import "../../App.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
const Cards = ({data:{confirmed,lastUpdate,recovered,deaths}}) => {
    if(!confirmed){
        return 'loading'
    }
    return (
        <div className='container1'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className='Infected'  >
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'><CountUp start={0} end={confirmed.value} duration={2} separator=',' /></Typography>
                        <Typography color='textSecondary'>
                           {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                    <Typography variant='body2'>
                        Number of active cases of covid-19
                    </Typography>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='Recovered'  >
                 <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant='h5'><CountUp start={0} end={recovered.value} duration={2} separator=',' /></Typography>
                        <Typography color='textSecondary'>
                           {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                    <Typography variant='body2'>
                        Number of recovers cases from covid-19
                    </Typography>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className='Deaths'  >                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Death
                        </Typography>
                        <Typography variant='h5'><CountUp start={0} end={deaths.value} duration={2} separator=',' /></Typography>
                        <Typography color='textSecondary'>
                           {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                    <Typography variant='body2'>
                        Number of deaths cases caused by covid-19
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
export default Cards;
