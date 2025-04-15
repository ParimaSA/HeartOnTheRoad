import { useEffect, useState } from "react";
import ScatterPlot from "../chart/ScatterChart";
import Loading from "../Loading";

export default function TrafficHeartRate() {
  const [data,  setData] = useState();

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/heart/v1/api/analytic/relation`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setData(data)
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
    
  }, [])

  return (
    <div className="w-full h-full overflow-hidden">
      {data ? 
        <ScatterPlot data={data} label={"Heart Rate vs Traffic Ratio"}/>: 
        <div className="w-full h-full p-4 bg-gray-100"><Loading/></div>
      }
    </div>
  );

}