import React, {useEffect, useState} from 'react';

function GetLocation () {
    const [location, setLocation] = useState({
        loaded: false,
        coordinate: {lat: '', lng: ''},
    });
    const onSuccess = location =>{
        setLocation({
            loaded: true,
            coordinate:{
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            }
        });
    };
    const onError = error =>{
        setLocation({
            loaded: true,
            error,
        });
    };
    useEffect(()=>{
        if(!('geolocation' in navigator)){
            setLocation(state =>({
                ...state,
                loaded: true,
                error: {
                    message: 'Location not supported',
                }
            }));
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    },[])
    return location;
}

export default GetLocation
