"use client";
import TripBox from "@/components/trip/TripDataBox"
import HeartRate from "@/components/trip/HeartRate";
import LocationMap from "@/components/trip/LocationMap";
import { useEffect, useState } from "react"

export default function Trip() {
  const [tripID, setTripID] = useState();

  useEffect(() => {
    console.log(tripID);
  }, [tripID])

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col">

      <div className="flex flex-col h-full w-full justify-between gap-y-4 pt-12 overflow-hidden px-24 ">

        <div className="flex justify-center items-center w-full h-[36vh]">
          <TripBox trip={tripID} setTrip={setTripID}/>
        </div>

        <div className="flex w-full h-full overflow-hidden">
          <HeartRate tripID={tripID}/>
          <LocationMap tripID={tripID}/>
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