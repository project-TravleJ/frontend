import { useCallback, useEffect, useRef, useState} from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarkers } from '../../modules/MarkersModule';
import { CallLocationAPI } from '../../apis/LocationAPI';
import {GoogleMap, InfoWindow, Marker, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import { resetAtt, setAtt } from '../../modules/MapsSelectedMarker';
import modalSlice from "../../features/modal/modalSlice";


const containerStyle = {
  width: '100%',
  height: '100%'
};

let center = { lat: 34.96728964552052, lng: 135.7726395113168 };


function PostMap() {

  /* redux 마커 가져오기 */
  const dispatch = useDispatch();

  const callmarkers = useSelector(store => store.markers);
  const [map, setMap] = useState(null);
  const [selectedLocation ,setSelectedLocation] = useState(null);
  const selectedMarker = useSelector(store => store.selectAttraction);
  const selectedPost = useSelector(store => store.selectedPost);
  // const isCreate = useSelector(store => store.createPost);
  // const modalOn = useSelector(store => store.modal);


  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API
  })


  // 마커 선택 메소드(추후 리덕스로 수정하여 화면에서 출력해야 함) -> 완료
  const handleSelectMarker = async(marker) => {
    if(marker.id === selectedMarker.id) {
      console.log("마커", marker);
      console.log("선택", selectedLocation);
      center = marker.position;
      return;
    }
    // setSelectedMarker(marker);
    console.log("map:  marker setAtt :", marker,  selectedMarker)
    dispatch(setAtt(marker));
  };

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])


  useEffect(
      () => {

        const courseList = selectedPost.courseList;
        dispatch(setMarkers(courseList.map(course => course.attraction)))

      }, [selectedPost.postId]
  );

  console.log("map : ", selectedPost);

  return isLoaded ? (
      <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          // onUnmount={onUnmount}
      >
        {callmarkers && callmarkers.map(marker => {console.log(marker); return(
            <>
              <Marker position={marker.loc}
                      onClick = {() => handleSelectMarker(marker)}
                      value = {marker}
                      id = {marker.id}
              >
                {selectedMarker.id === marker.id && <InfoWindow    // 함수나 props로 하나만 띄우도록 고쳐야 함.
                    position={marker.loc}
                    // options={{pixelOffset: new window.google.maps.Size(0, -25)}}

                    onCloseClick={() => {
                      setSelectedLocation(null);
                      dispatch(resetAtt());
                    }}
                >
                  <div>{marker.name}</div>
                </InfoWindow>}
              </Marker>
            </>
        )})}

      </GoogleMap>
  ) : <></>

}

export default React.memo(PostMap);