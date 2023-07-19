// import React, { useEffect, useRef } from 'react';
// import mapboxgl from 'mapbox-gl';
// import { GeocodingApi } from '@mapbox/mapbox-sdk/services/geocoding';

// const Map = () => {
//     const mapContainer = useRef(null);
//     const map = useRef(null);

//     useEffect(() => {
//         mapboxgl.accessToken = 'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';
//         const geocodingClient = GeocodingApi({accessToken: "pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw"});

//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: [-74.5, 40],
//             zoom: 15,
//         });
//         const placeName = '367 W Clearview Ave, State College, PA 16803'; // Specific location address
//         geocodingClient
//             .forwardGeocode({
//                 query: placeName,
//                 limit: 1,
//             })
//             .send()
//             .then((response) => {
//                 const result = response.body;
//                 if (result && result.features && result.features.length > 0) {
//                     const { center } = result.features[0];
//                     const [longitude, latitude] = center;

//                     // Set the center of the map to the specific place
//                     map.setCenter([longitude, latitude]);

//                     // Add a marker to the map
//                     new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
//                 }
//             })
//             // map.current.addControl(new mapboxgl.NavigationControl());
//             .catch((error) => {
//                 console.error('Error:', error.message);
//             });
//         // return () => {
//         //     map.current.remove();
//         // };
//     }, []);

//     return <div>
//         <div id="map" style={{ height: '400px' }} />
//         {/* <div className="map-controls">
//             <button
//                 className="map-control-button"
//                 onClick={() => map.current.zoomIn()}
//             >
//                 Zoom In
//             </button>
//             <button
//                 className="map-control-button"
//                 onClick={() => map.current.zoomOut()}
//             >
//                 Zoom Out
//             </button>
//         </div> */}
//     </div>;
// };

// export default Map;
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYWFzdGhpIiwiYSI6ImNsaTAweHljNTA5enozbHg3aHV1eXdkbnYifQ.g492HR4sB2y-0uOX8ddQaw';

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9,
    });

    const placeName = '367 W Clearview Ave, State College, PA 16803'; // Specific location address

    // Use Mapbox Geocoding API directly via fetch
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        placeName
      )}.json?access_token=${mapboxgl.accessToken}`
    )
      .then((response) => response.json())
      .then((data) => {
        const [longitude, latitude] = data.features[0].center;

        // Set the center of the map to the specific place
        map.current.setCenter([longitude, latitude]);

        // Add a marker to the map
        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map.current);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <div id="map" style={{ height: '400px' }} ref={mapContainer} />
    </div>
  );
};

export default Map;
