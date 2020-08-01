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
        {weatherData?.list?.map((weather,i)=>{
            return (
                <Grid item xs={12} sm={6} md={3} key={weather.dt}> 
                  <Card 
                      className={Math.round(weather.main.temp - 273.15) > 16 ? "warmCard":"normalcard"}>
                    <Typography variant="h5" >{city}</Typography> 
                    <p className="mt-1">
                      <strong> <Moment format="D MMM YYYY hh:mm a">{weather.dt_txt}</Moment></strong>
                    </p>
                    <p>
                       <strong>{weather.weather[0].description} </strong>
                    </p>
                      <div className="space-between">
                      <Typography variant="h2" className="white mt-1">
                                {Math.round(weather.main.temp - 273.15)}<span className="temp">&#176;</span>
                        </Typography>
                        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weathericon"></img>
                      </div>
                      <br/>
                      <div className="space-between">
                        <div>
                          <img className="c-icone" src="./images/humidity.png" alt="humidity" />
                          <Typography className="text-gray" > {weather.main.humidity}/humidity</Typography>
                        </div>
                       <div>
                          <img className="c-icone" src="./images/wind.png" alt="wind" />
                          <Typography  className="text-gray"> {weather.wind.speed} km/h</Typography>
                       </div>
                      </div>
                  </Card>
                </Grid>
            )
        })}
      </Grid>
    </Container>
  );
}