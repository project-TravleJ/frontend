import React from 'react';
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 34.98,
    lng: 135.75
}



function Map() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-scrpit',
        googleMapsApiKey: "============API_KEY==============="
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map){
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])


    // const infowindow = new InfoWindow({
    //     content: contentString,
    //     ariaLabel: "Kyoto Station"
    // });

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return isLoaded? (
        <GoogleMap
            mapContainerStyle = {containerStyle}
            zoom = {10}
            center = {center}
            onLoad = {onLoad}
            // onUnmount = {onUnmount}
        >
            <Marker position={{lat:34.96728964552052, lng:135.7726395113168}} title='후시미이나리신사' />
            <Marker position={{lat:34.994964536674246, lng: 135.7851235435887}} title='기요미즈데라' />
            <Marker position={{lat:35.04150479588236, lng: 135.72919640791784}} title='금각사' />

        </GoogleMap>
    ) : <div>Loading...</div>;
} 

export default React.memo(Map);