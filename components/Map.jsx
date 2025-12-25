"use client"

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
// React-Leaflet: React wrapper for Leaflet maps
// MapContainer: Main map container component
// Marker: Individual location markers on the map
// Popup: Information popup when marker is clicked
// TileLayer: Map tile layer (the actual map imagery)
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
// useMediaQuery: Hook to detect screen size for responsive behavior
import { useMediaQuery } from "react-responsive"
// Leaflet Icon: Custom marker icon configuration
import { Icon } from "leaflet"

// Leaflet CSS - required for map styling
import "leaflet/dist/leaflet.css"
import Image from "next/image"



// Map Markers Data
// Each marker contains: position (lat/lng), title, subtitle, and image
// Coordinates format: [latitude, longitude]
const markers = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/1.png"
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/2.png"
  },
  {
    position: [34.0211, -118.2965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: "/map/3.png"
  },
];

// Custom Map Marker Icon
// Replaces default Leaflet marker with custom SVG icon
// iconSize: [width, height] in pixels
const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

// Map Component - Interactive location map
// Features: Multiple markers, responsive zoom, custom icons, popups
const Map = () => {
  
  // Detect if device is mobile (screen width <= 768px)
  // Used to adjust map zoom level and height for better mobile UX
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (

    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      id='contact'
      className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80
      xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20"
    >
      {/* Leaflet Map Container */}
      {/* center: Initial map center coordinates [lat, lng] */}
      {/* zoom: Responsive zoom level (lower on mobile for better view) */}
      {/* zoomControl: false = hides default zoom controls (can add custom ones) */}
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}
        zoomControl={false}
      >
        {/* Map Tile Layer - Provides the actual map imagery (streets, roads, etc.) */}
        {/* CartoDB light theme - clean, minimal map style */}
        {/* {s}, {z}, {x}, {y}: Leaflet tile URL parameters for different zoom/positions */}
        <TileLayer
          attribution="&copy; <a>'https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* Map Markers - Renders each location marker with custom icon and popup */}
        {markers.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker.position}  // [latitude, longitude]
              icon={customIcon}  // Custom pin icon instead of default
            >
              {/* Popup Content - appears when marker is clicked */}
              <Popup>
                <div className="flex gap-x-[30px]">
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3>{marker.title}</h3>
                    <p className="leading-snug">{marker.subtitle}</p>
                  </div>
                  {/* Popup Image */}
                  <div className="flex-1">
                    <Image
                      src={marker.image}
                      width={130}
                      height={160}
                      alt="image"
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </motion.section>
  )}







export default Map