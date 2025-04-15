import { useEffect, useState } from "react";
import Histogram from "../chart/Histogram";
import Loading from "../Loading";

export default function CurrentSpeedHistogram({ traffic }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/speed/traffic/${traffic}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
  }, [traffic]);

  return (
    <div className="flex justify-center items-center w-full h-full px-8 py-2">
      {data ? (
        <Histogram data={data} xaxis="Speed" title="Speed Histogram" keyValue={"currentSpeed"} binSize={8} color="#A2EE55"/>
      ) : (
        <div className="w-full h-full p-4 bg-gray-100">
          <Loading />
        </div>
      )}
    </div>
  );
}
