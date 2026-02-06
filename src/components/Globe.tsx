"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-globe.gl to avoid SSR issues
const GlobeGL = dynamic(() => import("react-globe.gl"), { ssr: false });

// Mobile detection hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

interface Location {
  lat: number;
  lng: number;
  label: string;
  size?: number;
}

interface GlobeProps {
  locations?: Location[];
  globeColor?: string;
  atmosphereColor?: string;
  pinColor?: string;
  arcColor?: string;
  landColor?: string;
  borderColor?: string;
  autoRotate?: boolean;
  className?: string;
}

// Default KDT operational locations
const DEFAULT_LOCATIONS: Location[] = [
  { lat: 40.7128, lng: -74.006, label: "New York", size: 0.8 },
  { lat: 51.5074, lng: -0.1278, label: "London", size: 0.7 },
  { lat: 25.2048, lng: 55.2708, label: "Dubai", size: 0.7 },
  { lat: 35.6762, lng: 139.6503, label: "Tokyo", size: 0.6 },
  { lat: -33.8688, lng: 151.2093, label: "Sydney", size: 0.5 },
  { lat: 1.3521, lng: 103.8198, label: "Singapore", size: 0.6 },
  { lat: 48.8566, lng: 2.3522, label: "Paris", size: 0.5 },
  { lat: 52.52, lng: 13.405, label: "Berlin", size: 0.5 },
  { lat: -23.5505, lng: -46.6333, label: "São Paulo", size: 0.5 },
  { lat: 55.7558, lng: 37.6173, label: "Moscow", size: 0.5 },
];

// GeoJSON URL for country polygons
const COUNTRIES_GEOJSON_URL = "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson";

export default function Globe({
  locations = DEFAULT_LOCATIONS,
  globeColor = "#0a0a0a",
  atmosphereColor = "#f97316",
  pinColor = "#f97316",
  arcColor = "#f97316",
  landColor = "#2a2a2a",
  borderColor = "#444444",
  autoRotate = true,
  className = "",
}: GlobeProps) {
  const isMobile = useIsMobile();
  const globeRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [countries, setCountries] = useState<any>({ features: [] });
  const containerRef = useRef<HTMLDivElement>(null);

  // Return simple placeholder on mobile (3D globe is too heavy)
  if (isMobile) {
    return (
      <div className={`relative aspect-square ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#f97316]/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-3 h-3 rounded-full bg-[#f97316] animate-pulse mx-auto mb-2" />
              <span className="text-[12px] text-gray-500">Global Operations</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setIsClient(true);
    // Fetch country polygons GeoJSON
    fetch(COUNTRIES_GEOJSON_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to load countries GeoJSON:", err));
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setDimensions({ width, height: Math.min(width, 600) });
        }
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, [isClient]);

  useEffect(() => {
    if (globeRef.current && autoRotate) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.pointOfView({ altitude: 2.5 });
    }
  }, [autoRotate, isClient]);

  // Generate arcs between locations
  const arcsData = locations.slice(0, -1).map((loc, i) => ({
    startLat: loc.lat,
    startLng: loc.lng,
    endLat: locations[i + 1].lat,
    endLng: locations[i + 1].lng,
    color: arcColor,
  }));

  if (!isClient) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ height: dimensions.height }}>
        <div className="w-16 h-16 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Glow effect behind globe */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${atmosphereColor}15 0%, transparent 50%)`,
        }}
      />
      
      <GlobeGL
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl=""
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor={atmosphereColor}
        atmosphereAltitude={0.15}
        
        // Custom globe material
        globeMaterial={{
          color: globeColor,
          emissive: "#111111",
          emissiveIntensity: 0.1,
          shininess: 0.9,
        } as any}
        
        // Country polygons (landmass map)
        polygonsData={countries.features}
        polygonCapColor={() => landColor}
        polygonSideColor={() => landColor}
        polygonStrokeColor={() => borderColor}
        polygonAltitude={0.006}
        
        // Hexagon polygons for landmass effect
        hexPolygonsData={[]}
        
        // Points (pins)
        pointsData={locations}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => pinColor}
        pointAltitude={0.01}
        pointRadius={(d: any) => d.size || 0.5}
        pointsMerge={true}
        
        // Labels
        labelsData={locations}
        labelLat="lat"
        labelLng="lng"
        labelText="label"
        labelSize={1.5}
        labelColor={() => "#ffffff"}
        labelDotRadius={0.4}
        labelAltitude={0.02}
        labelResolution={2}
        
        // Arcs connecting locations
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcStroke={0.3}
        
        // Ring pulse effect on points
        ringsData={locations}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => pinColor}
        ringMaxRadius={3}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1500}
      />
      
      {/* Labels overlay */}
      <div className="absolute bottom-4 left-4 text-[12px] text-gray-500">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          Global Operations
        </span>
      </div>
    </div>
  );
}
