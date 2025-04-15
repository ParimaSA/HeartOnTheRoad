import { useEffect, useState } from "react";
import Histogram from "../chart/Histogram";
import Loading from "../Loading";

const heartRateDemoData = [
  { timestamp: "2024-04-01T08:00:00Z", heartrate: 75 },
  { timestamp: "2024-04-01T08:05:00Z", heartrate: 80 },
  { timestamp: "2024-04-01T08:10:00Z", heartrate: 85 },
  { timestamp: "2024-04-01T08:15:00Z", heartrate: 90 },
  { timestamp: "2024-04-01T08:20:00Z", heartrate: 100 },
  { timestamp: "2024-04-01T08:25:00Z", heartrate: 95 },
  { timestamp: "2024-04-01T08:30:00Z", heartrate: 105 },
  { timestamp: "2024-04-01T08:35:00Z", heartrate: 98 },
  { timestamp: "2024-04-01T08:40:00Z", heartrate: 88 },
  { timestamp: "2024-04-01T08:45:00Z", heartrate: 92 },
  { timestamp: "2024-04-01T08:50:00Z", heartrate: 89 },
  { timestamp: "2024-04-01T08:55:00Z", heartrate: 85 },
  { timestamp: "2024-04-01T09:00:00Z", heartrate: 82 },
];

const heartRateDemoData2 = [
  { timestamp: "2024-04-02T17:30:00Z", heartrate: 78 },
  { timestamp: "2024-04-02T17:35:00Z", heartrate: 120 },
  { timestamp: "2024-04-02T17:40:00Z", heartrate: 88 },
  { timestamp: "2024-04-02T17:45:00Z", heartrate: 95 },
  { timestamp: "2024-04-02T17:50:00Z", heartrate: 99 },
  { timestamp: "2024-04-02T17:55:00Z", heartrate: 102 },
  { timestamp: "2024-04-02T18:00:00Z", heartrate: 108 },
  { timestamp: "2024-04-02T18:05:00Z", heartrate: 104 },
  { timestamp: "2024-04-02T18:10:00Z", heartrate: 97 },
  { timestamp: "2024-04-02T18:15:00Z", heartrate: 92 },
  { timestamp: "2024-04-02T18:20:00Z", heartrate: 89 },
  { timestamp: "2024-04-02T18:25:00Z", heartrate: 86 },
  { timestamp: "2024-04-02T18:30:00Z", heartrate: 84 },
];
  

export default function HeartRateHistogram({traffic}) {

  const [data,  setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/heartrate/traffic/${traffic}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("heartrate: ", data);
      setData(data)
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
  }, [traffic]);

  return (
    <div className="flex justify-center items-center w-full h-full px-8 py-2">
        {data ? 
          <Histogram data={data} xaxis={"Heart Rate"} title={"Heart Rate Histogram"} keyValue={"heartrate"} binSize={8} color="#B2EF74"/>: 
          <div className="w-full h-full p-4 bg-gray-100"><Loading/></div>
        }
    </div>
  );

}