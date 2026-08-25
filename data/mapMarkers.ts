/**
 * Map markers for Leaflet: lat/lng, title, subtitle, and image for popup.
 * Used by components/Map.tsx. Position array format: [latitude, longitude].
 */
import type { MapMarkerData } from "@/types";

/** Map marker data: position [lat, lng], title, subtitle, image path */
export const mapMarkers: MapMarkerData[] = [
  {
    position: [25.2076, 55.2551],
    title: "LUMA Dubai",
    subtitle: "City Walk, Dubai — open daily, 12pm to midnight.",
    image: "/map/1.png",
  },
];
