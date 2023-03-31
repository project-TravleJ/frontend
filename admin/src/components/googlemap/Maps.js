import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMarkers } from '../../modules/MarkersModule';
import { CallLocationAPI } from '../../apis/LocationAPI';

import markerData from '../../data/marker-data.json';


function App() {

  /* redux 마커 가져오기 */
  const dispatch = useDispatch();

  const callmarker = useSelector(store => store.markers);

  useEffect(
    () => {
      dispatch(setMarkers(CallLocationAPI()));
    }, []
  );


  const mapElement = useRef(null);
  const markers = useRef([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadScript = useCallback((url) => {
    const firstScript = window.document.getElementsByTagName('script')[0];
    const newScript = window.document.createElement('script');
    newScript.src = url;
    newScript.async = true;
    newScript.defer = true;
    firstScript?.parentNode?.insertBefore(newScript, firstScript);
  }, []);

  const initMap = useCallback(() => {
    const { google } = window;
    if (!mapElement.current || !google) return;

    const location = { lat: 34.96728964552052, lng: 135.7726395113168 };

    const map = new google.maps.Map(mapElement.current, {
      zoom: 12,
      center: location,
    });

    callmarker.forEach((marker) => {
      const position = new google.maps.LatLng(marker.loc.lat, marker.loc.lng);
      const markerObj = new google.maps.Marker({
        position,
        map,
        title: marker.name,
      });
      markers.current.push(markerObj);
    });
    
    

    map.addListener("click", (event) => {
      const marker = new google.maps.Marker({
        position: event.latLng,
        map,
        
      });

      markers.current.push(marker);
    });

    // 마커 검색 기능
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.toLowerCase();
      markers.current.forEach((marker) => {
        if (marker.title.toLowerCase() === query) {
          marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      });
    });
  }, [callmarker]);

  useEffect(() => {
    const script = window.document.getElementsByTagName('script')[0];
    const includeCheck = script.src.startsWith(
      'https://maps.googleapis.com/maps/api'
    );

    if (includeCheck) return initMap();
    window.initMap = initMap;
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdncR3Xm9D6mhrC-gMPVottSjcG2PZa4c&callback=initMap&language=k`
    );
  }, [initMap, loadScript]);

  return (
    <div>
      <div>
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button id="search-button">Search</button>
      </div>
      <div ref={mapElement} style={{ minHeight: '395px', minWidth: '710px'}} />
    </div>
  );
}

export default App;