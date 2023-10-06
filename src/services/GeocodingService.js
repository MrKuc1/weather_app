import $api from "../utils/http";

export default class GeocodingService {
    static async getGeocod(ip) {
        return $api.get('http://api.ipstack.com/' + ip + '?access_key=' + process.env.REACT_APP_IP_STACK_KEY)
    }
}