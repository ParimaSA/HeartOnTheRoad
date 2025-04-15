'use client';

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useState, useEffect, useRef } from "react";
import Loading from "../Loading";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
    suspense: true,
    loadableGenerated: {
      webpack: () => [require.resolve("react-leaflet")],
      modules: ["react-leaflet"],
    },
  }
);
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });

const trafficColor = (current, freeFlow) => {
  if (freeFlow - current > 12) return "red"; // Bad traffic
  if (current >= freeFlow) return "green"; // Normal traffic
  return "orange"; // Moderate traffic
};

export default function RouteMap({ routeData }) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("routeData changed:", routeData);
    setIsMapLoaded(false); 
    setMounted(false);
    setTimeout(() => {
      setMounted(true);
    }, 0);
  }, [routeData]);

  if (!Array.isArray(routeData)) {
    return <div className='w-full h-full flex justify-center items-center'><Loading /></div>;
  }

  if (!routeData || routeData.length === 0) {
    return <div className='w-full h-full flex justify-center items-center'><Loading /></div>;
  }

  const averageLat = routeData.reduce((acc, { latitude }) => acc + latitude, 0) / routeData.length;
  const averageLng = routeData.reduce((acc, { longitude }) => acc + longitude, 0) / routeData.length;

  const routePositions = routeData
    .map(({ latitude, longitude, currentSpeed, freeFlowSpeed }, index) => {
      if (index < routeData.length - 1) {
        const nextPoint = routeData[index + 1];
        return {
          positions: [
            [latitude, longitude],
            [nextPoint.latitude, nextPoint.longitude],
          ],
          color: trafficColor(currentSpeed, freeFlowSpeed),
        };
      }
      return null;
    })
    .filter(Boolean);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  if (!mounted) return null;

  if (isMapLoaded) return <Loading />

  return (
    <div className="w-full h-full">
      {routeData && routeData.length > 0 ? (
        <div ref={mapRef} style={{ height: "100%", width: "100%" }}>
          <MapContainer
            key={JSON.stringify(routeData)}
            center={[averageLat, averageLng]}
            zoom={routeData.length > 10 ? 9 : 11}
            style={{ height: "100%" }}
            onLoad={handleMapLoad}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {routePositions.map((segment, index) => (
              <Polyline key={index} positions={segment.positions} color={segment.color} />
            ))}
          </MapContainer>
        </div>
      ) : (
        <div className='w-full h-full flex justify-center items-center'>
          <Loading />
        </div>
      )}
    </div>
  );
}
