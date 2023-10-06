import React, {useEffect, useState} from 'react';
import classes from './body.module.css';
import Weather from "../../weather/weather";

const Body = () => {

    const [userGeo, setUserGeo] = useState(null);

    useEffect(() => {
        setUserGeo(JSON.parse(sessionStorage.getItem('userInfo')));
    }, [sessionStorage.getItem('userInfo')])

    return (
        <div className={classes.bodyBG}>
        {userGeo ? <Weather userGeo={userGeo}/> : null}
        </div>
    );
};

export default Body;