import $api from "../utils/http";

export default class GetIPUserService {
    static async GetIpUser() {
        return $api.get('https://api.ipify.org?format=json')
    }
}