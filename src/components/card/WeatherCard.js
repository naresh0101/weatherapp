import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core/';
import Moment from 'react-moment';

import "./index.css"

export default function WeatherDetails({ weatherData,city }) { 

  return (
    <Container>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {weatherData?.list?.map((item,i)=>{
            return (
                <Grid item xs={12} sm={6} md={3} key={item.dt}> 
                  <Card 
                      className="card"
                      style={{padding:"10px",backgroundColor: Math.round(item.main.temp - 273.15) > 16 ? "#ff0000ab":"skyblue" }}
                  >
                  <Typography variant="h5" >{city}</Typography> 
                  <p>
                     <strong> <Moment format="D MMM YYYY hh:mm a">{item.dt_txt}</Moment></strong>
                  </p>
                  <p>
                      <strong>{item.weather[0].description} </strong>
                  </p>
                    <div className="space-between">
                    <Typography variant="h2" className="white mt-1">
                              {Math.round(item.main.temp - 273.15)}<span className="temp">&#176;</span>
                      </Typography>
                      <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weathericon"></img>

                    </div>
                  </Card>
                </Grid>
            )
        })}
      </Grid>
    </Container>
  );
}