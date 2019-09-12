import React from 'react';

class Weather extends React.Component{
    render(){
        return(
           <div>
            <div className="weather-info">
             <p>Location: {this.props.city} / {this.props.country}</p>
             <p>Temperature: {this.props.temperature}°C</p>
             <p>Humidity: {this.props.humidity}%</p>
             <p>Pressure: {this.props.pressure} bar</p>
             <p>Wind speed: {this.props.windSpeed} m/sec</p>
             <p>Cloudiness: {this.props.description}</p>
            </div>
             <p className="weather-error">{this.props.error}</p>
          </div>
        );
    }
}

export default Weather;