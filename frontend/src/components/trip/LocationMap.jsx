"use client";
import Loading from "../Loading";
import RouteMap from "../chart/Map";
import { useState, useEffect } from "react";

const sampleRoute = [
  { 
    latitude: 13.9632952, 
    longitude: 100.6501381, 
    currentSpeed: 55, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9624301, 
    longitude: 100.645479, 
    currentSpeed: 55, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9579432, 
    longitude: 100.6429818, 
    currentSpeed: 55, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9546857, 
    longitude: 100.6430153, 
    currentSpeed: 62, 
    freeFlowSpeed: 62 
  },
  { 
    latitude: 13.9500118, 
    longitude: 100.6425906, 
    currentSpeed: 56, 
    freeFlowSpeed: 56 
  },
  { 
    latitude: 13.9475247, 
    longitude: 100.6426957, 
    currentSpeed: 56, 
    freeFlowSpeed: 56 
  },
  { 
    latitude: 13.9421166, 
    longitude: 100.642294, 
    currentSpeed: 18, 
    freeFlowSpeed: 40 
  },
  { 
    latitude: 13.9420329, 
    longitude: 100.6424509, 
    currentSpeed: 21, 
    freeFlowSpeed: 40 
  },
  { 
    latitude: 13.9354004, 
    longitude: 100.6415724, 
    currentSpeed: 57, 
    freeFlowSpeed: 57 
  },
];

const sampleRoute2 = [
  { 
    latitude: 13.9640351, 
    longitude: 100.6523475, 
    currentSpeed: 50, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9612209, 
    longitude: 100.6498253, 
    currentSpeed: 52, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9574315, 
    longitude: 100.6473196, 
    currentSpeed: 60, 
    freeFlowSpeed: 60 
  },
  { 
    latitude: 13.9536824, 
    longitude: 100.6445685, 
    currentSpeed: 55, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9505419, 
    longitude: 100.6417867, 
    currentSpeed: 58, 
    freeFlowSpeed: 60 
  },
  { 
    latitude: 13.9468923, 
    longitude: 100.6400513, 
    currentSpeed: 50, 
    freeFlowSpeed: 55 
  },
  { 
    latitude: 13.9431266, 
    longitude: 100.6383149, 
    currentSpeed: 20, 
    freeFlowSpeed: 40 
  },
  { 
    latitude: 13.9402078, 
    longitude: 100.6365987, 
    currentSpeed: 25, 
    freeFlowSpeed: 40 
  },
  { 
    latitude: 13.9368904, 
    longitude: 100.6350602, 
    currentSpeed: 56, 
    freeFlowSpeed: 58 
  },
  { 
    latitude: 13.9335402, 
    longitude: 100.6344319, 
    currentSpeed: 60, 
    freeFlowSpeed: 60 
  },
  { 
    latitude: 13.9311256, 
    longitude: 100.6338875, 
    currentSpeed: 62, 
    freeFlowSpeed: 62 
  },
];



export default function LocationMap({tripID}) {

  const [data,  setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/location/trip/${tripID}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      console.log(data);
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
  }, [tripID])

  return (
    <div className="w-full h-full p-8">
      {data ? 
        <RouteMap routeData={data}/> : 
        <div className="w-full h-full p-4 bg-gray-100"><Loading/></div>
      }
    </div>
  )
  
}