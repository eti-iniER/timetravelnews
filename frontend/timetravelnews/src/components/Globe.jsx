import { useRef, useState, useEffect } from "react"
import { API_TOKENS } from '../data/API_TOKENS'
import mapboxgl from 'mapbox-gl'
import earthImage from '../assets/images/earth_image.png'

mapboxgl.accessToken = API_TOKENS.mapbox;

const Globe = (props) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(1.5);

    // useEffect(() => {
    //     if (map.current) return; // initialize map only once

    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         projection: 'globe',
    //         style: 'mapbox://styles/mapbox/streets-v12',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });
    // });

    return (
        <>
            <h1>Hello</h1>
            <p>{earthImage}</p>
            <img src={earthImage}></img>
            {/* This is the real globe code below. The image is just a placeholder */}
            {/* <div ref={mapContainer} className="map-container" style={{ width: "1000px", height: "600px" }} /> */}
        </>
    )
}

export default Globe;