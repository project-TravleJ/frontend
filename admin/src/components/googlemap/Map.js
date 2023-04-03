import { useCallback, useEffect, useRef, useState} from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarkers } from '../../modules/MarkersModule';
import { CallLocationAPI } from '../../apis/LocationAPI';
import {GoogleMap, InfoWindow, InfoWindowF, Marker, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import Popup1 from '../sidepopup/Popup1';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = { lat: 34.96728964552052, lng: 135.7726395113168 };


function Map() {

  /* redux 마커 가져오기 */
  const dispatch = useDispatch();
  const callmarkers = useSelector(store => store.markers);

  
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "API-KEY"
  })
  
  const [map, setMap] = useState(null);
  const [selectedLocation ,setSelectedLocation] = useState(null);
  
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])


  
  useEffect(
    () => {
      dispatch(setMarkers(CallLocationAPI()));
      console.log(callmarkers)
    }, []
  );
  // const onUnmount = useCallback(function callback(map){
  //   setMap(null);
  // }, [])

  console.log(callmarkers);
  console.log(selectedLocation);
  return isLoaded ? (
    <GoogleMap 
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      // onUnmount={onUnmount}
      >
      {callmarkers.map(marker => {console.log(marker); return( 
        <>
        <Marker position={marker.loc}
          // icon={{
          //   url: "icon.svg",
          //   scaledSize: new window.google.maps.Size(25,25),
          // }}
          onClick = {(e) => {
            setSelectedLocation(marker.loc);
          }}
          value = {marker}
          id = {marker.id}
        />
        {selectedLocation && <InfoWindow    // 함수나 props로 하나만 띄우도록 고쳐야 함.
          position={selectedLocation}
          options={{pixelOffset: new window.google.maps.Size(0, -25)}}
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
        >
            <div>{marker.name}</div>
        </InfoWindow>}  
        </>
      )})}
      
    </GoogleMap>
  ) : <></>

}

export default React.memo(Map);