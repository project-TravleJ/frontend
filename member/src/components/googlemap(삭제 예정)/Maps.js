import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
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
    const location2 = { lat: 34.994964536674246, lng: 135.7851235435887 };
    const location3 = { lat: 35.04150479588236, lng: 135.72919640791784 };

    const map = new google.maps.Map(mapElement.current, {
      zoom: 12,
      center: location,
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      map,
      suppressMarkers: true,
    });

    const markerPositions = [location, location2, location3];
    const markerInfos = [
      { name: "후시미이나리신사", description: "내 1 마커다." },
      { name: "기요미즈데라", description: "내 2 마커다" },
      { name: "금각사", description: "내 3 마커다" },
    ];

    markers.current = markerPositions.map((position, index) => {
      const marker = new google.maps.Marker({
        position,
        map,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div>
            <h3>${markerInfos[index].name}</h3>
            <p>${markerInfos[index].description}</p>
          </div>
        `
      });

      marker.addListener("click", () => {
        showInfoWindow(marker, infoWindow);
      });

      return marker;
    });

    function showInfoWindow(marker, infoWindow) {
      infoWindow.open(map, marker);
    }

    const origin = markerPositions[0];
    const destination = markerPositions[1];

    const request = {
      origin,
      destination,
      travelMode: google.maps.TravelMode.TRANSIT,
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });

    // 마커생성
    map.addListener("click", (event) => {
      const marker = new google.maps.Marker({
        position: event.latLng,
        map,
      });

      markers.current.push(marker);

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div>
            <h3>새로운 마커</h3>
            <p>새로운 마커를 추가했습니다.</p>
          </div>
        `
      });

      marker.addListener("click", () => {
        showInfoWindow(marker, infoWindow);
      });
    });

  // 마커 검색 기능
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    markers.current.forEach((marker) => {
      const markerInfo = markerInfos.find(info => info.name.toLowerCase() === query);
      if (markerInfo) {
        marker.setVisible(true);
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div>
              <h3>${markerInfo.name}</h3>
              <p>${markerInfo.description}</p>
            </div>
          `
        });
        infoWindow.open(map, marker);
      } else {
        marker.setVisible(false);
      }
    });
  });
}, []);

    

  useEffect(() => {
    const script = window.document.getElementsByTagName('script')[0];
    const includeCheck = script.src.startsWith(
      'https://maps.googleapis.com/maps/api'
    );

    if (includeCheck) return initMap();
    window.initMap = initMap;
    loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdncR3Xm9D6mhrC-gMPVottSjcG2PZa4c&callback=initMap&language=ko`
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