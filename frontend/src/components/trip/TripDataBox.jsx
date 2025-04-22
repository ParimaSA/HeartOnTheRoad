"use client";
import { useEffect, useState } from "react";
import SelectTrip from "./SelectTrip";
import Loading from "../Loading";
import PieChart from "../chart/PieChart";
import BoxPlotChart from "../chart/BoxPlot";

export default function TripBox({trip, setTrip}) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/trip/${trip}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Failed to fetch:", err);
      }); 
  }, [trip]);

  return (
    <div data-testid="trip-box" className="w-full h-full flex justify-between gap-y-4 lg:gap-y-12">

      {/* Pink Data Box */}
      <div className="flex w-[40vw] h-full md:min-w-[40vw] bg-[#FABCCD] rounded-[20px] p-4 md:p-8 flex flex-col gap-y-4">

        {/* Header Part */}
        <div className="flex justify-between gap-x-4">
          <h1 className="text-md font-extrabold md:text-2xl">Trip Dashboard</h1>
          <SelectTrip setTrip={setTrip} />
        </div>

        {/* Data Part */}
        {data === undefined ? (
          <Loading/>
        ) : (
          <div className="w-full h-full flex flex-col gap-y-4 overflow-y-auto">
            <div>
              <p data-testid="trip-start">Start Time: {data.start_time}</p>
              <p>Duration: {data.duration} minutes</p>
            </div>

            <div>
              <div className="flex justify-start items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>
                <p className="font-semibold text-lg">Heartrate</p>
              </div>
              <p>Minimum Heartrate: {data.min_heartrate}</p>
              <p>Maximum Heartrate: {data.max_heartrate}</p>
              <p>Average Heartrate: {data.average_heartrate}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between p-8">

        {/* BPM Box */}
        {!data || !data.average_heartrate ? (
          <Loading/>
        ) : 
        (<div className="flex items-center justify-center gap-x-4 w-[20vw] py-[4vh] bg-gray-200 rounded-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
            <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z"/>
            <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z"/>
          </svg>
          <p className="text-2xl lg:text-4xl font-bold">{data.average_heartrate.toFixed(2)} BPM</p>
        </div>)}

        {/* Duration Box */}
        {!data || !data.duration ? (
          <Loading/>
        ) : 
        (<div className="flex items-center justify-center gap-x-4 w-[20vw] py-[2vh] bg-gray-200 rounded-[20px]">
          <p className="text-2xl lg:text-4xl font-bold">{data.duration.toFixed(2)} min</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">
            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527"/>
          </svg>
        </div>)}

      </div>

      {/* Traffic Box */}
      <div className="h-full">
        { !data || !data.record ? (
          <Loading/>
        ) : (
          <PieChart label={"Number of Record"} labels={["trafficjam", "normal"]} dataset={[data.record.trafficjam, data.record.normal]} />
        )}
      </div>
      

    </div>
  );
}
