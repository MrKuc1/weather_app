import React, {useState} from 'react';
import GetIPUserService from "../../services/GetIPUserService";
import GeocodingService from "../../services/GeocodingService";

const UseGeo = () => {

    const [geo, setGeo] = useState({});

    if (sessionStorage.getItem('userInfo')) {
        return;
    } else {
        getGeoUser();
    }

    async function getGeoUser() {
        try {
            await GetIPUserService.GetIpUser()
                .then(ipUser => {
                    if (ipUser.status === 200) {
                        GeocodingService.getGeocod(ipUser.data.ip)
                            .then(data => {
                                console.log(data.data)
                                const geoInfo = {
                                    "userName": null,
                                    "geo": {
                                        "city": data.data.city,
                                        "country": data.data.country_name,
                                        "region": data.data.region_name,
                                        "latitude": data.data.latitude,
                                        "longitude": data.data.longitude,
                                    }
                                }
                                setGeo(geoInfo);
                                sessionStorage.setItem('userInfo', JSON.stringify(geoInfo));
                            })
                    }
                })
        } catch (error) {
            console.error(error)
        }
    }
    return [geo];
};

export default UseGeo;