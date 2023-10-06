import React, {useEffect, useState} from 'react';
import classes from "./weather.module.css";
import useFetch from "../../utils/hooks/useFetch";
import WeatherService from "../../services/WeatherService";
import ForecastItem from "./forecast/forecastItem";

const Weather = ({userGeo}) => {

    const [weatherData] = useFetch(WeatherService.getWeather, [userGeo.geo.latitude, userGeo.geo.longitude]);
    const [activeForecastWeatherItem, setActiveForecastWeatherItem] = useState()

    useEffect(() => {
        if (weatherData) {
            setActiveForecastWeatherItem(weatherData.data.list[0]);
        }
    }, [weatherData])

    return (
        <div className="conteiner mx-auto">
            <div className={classes.weatherField + ' bg-content'}>
                {activeForecastWeatherItem ?
                    <>
                        <div className={classes.weather}>
                            <div className={classes.weatherDate}>
                                {new Date((activeForecastWeatherItem.dt * 1000)).toString()}
                            </div>
                            <div className={classes.weatherLocation}>
                                {userGeo.geo.city + ', ' + userGeo.geo.country}
                            </div>
                            <div className={classes.weatherTempField}>
                                <div className={classes.weatherTemp}>
                                    <div className={classes.weatherTempNow}>
                                        {activeForecastWeatherItem.main.temp}<span className="fahrenheit"/>
                                    </div>
                                    <div className={classes.weatherTempMinMax}>
                                        <span className="arrow-down"/>&nbsp;{activeForecastWeatherItem.main.temp_min}<span className="fahrenheit"/>&nbsp;<span className="arrow-up"/>&nbsp;{activeForecastWeatherItem.main.temp_max}<span className="fahrenheit"/>
                                    </div>
                                </div>
                                <div className={classes.weatherCondition}>
                                    <img src={'https://openweathermap.org/img/wn/' + activeForecastWeatherItem.weather[0].icon + '@2x.png'}/>
                                </div>
                            </div>

                        </div>
                    </>
                    :
                    null
                }
            </div>
            <div className={classes.weatherForecast}>
                {weatherData ? weatherData.data.list.slice(0, 12).map((item) =>
                    <ForecastItem item={item} setActiveForecastWeatherItem={setActiveForecastWeatherItem}/>
                ) : null}
            </div>
        </div>
    );
};

export default Weather;