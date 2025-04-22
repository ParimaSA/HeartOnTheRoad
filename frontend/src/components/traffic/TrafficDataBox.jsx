"use client";
import { useEffect, useState } from "react";
import { TrafficSwitch } from "./TrafficSwitch";
import Loading from "../Loading";


export default function TrafficBox({traffic, setTraffic}) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/traffic/${traffic}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
  }, [traffic])

  return (
    <div data-testid="traffic-box" className="w-full h-full flex flex-col lg:justify-between">

      {/* Pink Data Box */}
      <div className="flex w-full h-full bg-[#FABCCD] rounded-[20px] p-8 flex flex-col gap-y-4">

        {/* Header Part */}
        <div className="flex justify-between gap-x-4">
          <h1 className="text-md font-extrabold md:text-2xl">Traffic Dashboard</h1>
          <TrafficSwitch setTraffic={setTraffic}/>
        </div>

        {/* Data Part */}
        {data === undefined ? (
          <Loading/>
        ) : (
          <div className="w-full h-full flex flex-col gap-y-4 overflow-y-auto">
            <div>
              <p data-testid="num-record">Number of Record: {data.number_of_records}</p>
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

      <div className="flex w-full h-full justify-between py-8 gap-x-8">

        <div className="flex flex-col lg:justify-between items-center w-full h-full gap-y-2">
          {/* Speed Box */}
          {!data || !data.average_speed ? (
            <Loading/>
          ) : 
          (<div className="flex flex-col items-center justify-center gap-y-2 w-full py-[3vh] bg-gray-200 rounded-[20px]">
            <p className="text-sm">Average Speed</p>
            <div className="flex items-center gap-x-4">
              <p className="text-2xl lg:text-4xl font-bold">{data.average_speed.toFixed(2)}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
                <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
              </svg>
            </div> 
          </div>)}

          <div className="relative flex items-center justify-center gap-x-8 w-full h-[80px] lg:h-[130px] bg-[#F4CED9] opacity-70 rounded-[20px]">
            
            {/* <Image src="/blue.png" alt="background" width={900} height={100} className="inset-0 w-full h-full rounded-[20px] opacity-70"/> */}

            <div className="absolute inset-0 z-10 flex items-center justify-center gap-x-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-car-front-fill text-gray-600" viewBox="0 0 16 16">
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17s3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-search-heart text-gray-600" viewBox="0 0 16 16">
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
                <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
              </svg>
            </div>
          </div>

        </div>

        <div className="flex flex-col w-full h-full gap-y-4">
          {/* BPM Box */}
          { !data || !data.average_heartrate ? (
            <Loading/>
          ) : 
          (<div className="flex flex-col items-center justify-center gap-y-2 w-full py-[16px] lg:py-[4vh] bg-gray-200 rounded-[20px]">
            <p className="text-sm">Average Heart Rate</p>
            <div className="flex items-center gap-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heart-pulse-fill" viewBox="0 0 16 16">
                <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z"/>
                <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z"/>
              </svg>
              <p className="text-2xl lg:text-4xl font-bold">{data.average_heartrate.toFixed(2)} BPM</p>
            </div>
          </div>)}

          {/* Travel Time Box */}
          { !data || !data.average_travel_time ? (
            <Loading/>
          ) : 
          (<div className="flex flex-col items-center justify-center gap-y-2 w-full py-[12px] lg:py-[3vh] bg-gray-200 rounded-[20px]">
            <p className="text-sm">Average Travel Time</p>
            <div className="flex items-center gap-x-4">
              <p className="text-2xl lg:text-4xl font-bold">{data.average_travel_time.toFixed(2)} min</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">
                <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527"/>
              </svg>
            </div> 
          </div>)}
        </div>
        
      </div>
      

    </div>
  );
}
