import React, { Component, Fragment } from 'react';
import Appbar from '../appbar/Appbar';
import SearchWeather from '../form/SearchWeather';
import WeatherCard from '../card/WeatherCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weatherData : [],
            cityName:'Bangalore'
         }
    }
    async weatherByCity(city){
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=85fce8b8faa0016f798cb529a0427f7d`
        let response = await fetch(url);
        let data = await response.json();
        this.setState({ weatherData:data,cityName:data.city.name })
    }

    componentDidMount(){
        this.weatherByCity(this.state.cityName)
    }

    render() { 
        const {weatherData, ...other } = this.props
        return ( 
            <Fragment >
                <Appbar />
                <SearchWeather searchWeatherBycity={
                    this.weatherByCity.bind(this)
                } />
                <WeatherCard  weatherData={this.state.weatherData} city={this.state.cityName} />
            </Fragment>
         );
    }
}

 
export default Home;