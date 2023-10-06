import $api from "../utils/http";

export default class WeatherService {
    static async getWeather([lat, lon]) {
        return $api.get('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + process.env.REACT_APP_WEATHER_KEY + '&units=' + 'imperial')
    }
}