import React, { Component } from 'react'
import './style.css'

 class Weathersubcontent extends Component {
    
     //This component only render when 'weatherdata' state change in parent component it increase the performance   
      shouldComponentUpdate(prevProps,preState){
        if(prevProps.weatherdata !== this.props.weatherdata){
          return true
        }
        return false
      }
    render() {
        const { weatherdata } = this.props;
        return (
            <div className="bodycard">
                {weatherdata.cod != 404 ? (
                <>
                    <div className="subcard">
                        <span className="cardtitle">
                        {weatherdata.name} , {weatherdata.sys.country}
                        </span>
                        <span className="datetime">
                        Date : {new Date().toLocaleTimeString()}
                        </span>
                        <h1>
                            {Math.floor(weatherdata.main.temp)} 
                            <sup>o</sup>
                        </h1>

                        <span className="weather-main">{weatherdata.weather[0].main}</span>
                        <img className="weather-icon" src={"http://openweathermap.org/img/wn/" +
                        `${weatherdata.cod != 404 ? weatherdata.weather[0].icon : null}` +
                        ".png"} alt={weatherdata.name} title={weatherdata.name} />
                        <span className="weather-description">
                        {" "}
                        <b>Precipitation : </b>
                        {weatherdata.weather[0].description}
                        </span>
                        <span className="wild">
                        {" "}
                        <b>Wind speed : </b>
                        {Math.floor((weatherdata.wind.speed * 18) / 5)} km/hr
                        </span>
                        <span className="cloudcover">
                        {" "}
                        <b>Cloud cover : </b>
                        {weatherdata.clouds.all}
                        </span>
                        <span className="sunset">
                        {" "}
                        <b>Time of sunset : </b>
                        {new Date(weatherdata.sys.sunset * 1000).toLocaleTimeString()}
                        </span>
                        <span className="sunrise">
                        {" "}
                        <b>Time of sunrise : </b>
                        {new Date(weatherdata.sys.sunrise * 1000).toLocaleTimeString()}
                        </span>
                        
                    </div>
                </>
                ) : (
                <div className="subcard">
                    <h3>{weatherdata.message}</h3>
                </div>
                )}
            </div>
        )
    }
}

export default Weathersubcontent
