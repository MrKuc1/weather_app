import React from 'react';
import classes from './forecastItem.module.css';

const ForecastItem = ({item, setActiveForecastWeatherItem}) => {
    return (
        <div className={classes.forecastItemField + ' bg-content'} onClick={() => setActiveForecastWeatherItem(item)}>
            <div className={classes.forecastItemDate}>
                {new Date((item.dt * 1000)).toLocaleDateString("en-US")}
                <br/>
                {new Date((item.dt * 1000)).toLocaleTimeString("en-US", {hour: 'numeric', minute: '2-digit'})}
            </div>
            <div className={classes.forecastItemTemp}>
                {item.main.temp}<span className="fahrenheit"/>
            </div>
        </div>
    );
};

export default ForecastItem;