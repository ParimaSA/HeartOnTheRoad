"use client";
import { useEffect, useState } from "react"
import TrafficBox from "@/components/traffic/TrafficDataBox";
import HeartRateHistogram from "@/components/traffic/HeartRateHistogram";
import CurrentSpeedHistogram from "@/components/traffic/SpeedHistogram";

export default function Traffic() {
  const [traffic, setTraffic] = useState(false);

  useEffect(() => {
    console.log(traffic);
  }, [traffic])

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col">

      <div className="flex h-full w-full justify-between gap-x-4 lg:gap-x-16 overflow-hidden px-4 lg:px-12">

        <div className="flex justify-center items-center w-full p-4 lg:p-12">
          <TrafficBox traffic={traffic} setTraffic={setTraffic}/>
        </div>

        <div className="flex flex-col justify-between gap-y-8 w-full h-full py-4 lg:py-12">
          <HeartRateHistogram traffic={traffic}/>
          <div className="w-full border border-solid border-gray-200"></div>
          <CurrentSpeedHistogram traffic={traffic}/>
        </div>
          
      </div>

      <div
        className="relative w-full h-[80px]"
        style={{
          backgroundImage: `url('/pinkpattern.png'), url('/pinkpattern.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
          opacity: 0.5,
        }}
      ></div>

    </div>
  )
}