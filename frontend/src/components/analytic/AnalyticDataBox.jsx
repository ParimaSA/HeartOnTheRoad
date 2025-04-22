"use client";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import PieChart from "../chart/PieChart";
import BarChart from "../chart/BarChart";


export default function AnalyticBox({setTrip}) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/analytic`)
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data)
      setData(data)
    })
    .catch((err) => {
      console.error("Failed to fetch trip data:", err);
    });
    
  }, [])

  return (
    <div data-testid="analytic-box" className="w-full h-full flex justify-between gap-y-12">

      {/* Pink Data Box */}
      <div className="overflow-y-auto flex flex-col lg:flex-row justify-between w-[40vw] h-full md:min-w-[40vw] bg-[#FABCCD] rounded-[20px] p-4 md:p-8 gap-y-4">

        <div className="flex flex-col">
          {/* Header Part */}
          <div className="flex justify-between gap-x-4">
            <h1 className="text-md font-extrabold md:text-2xl">Analytic</h1>
          </div>

          {/* Data Part */}
          {data === undefined ? (
            <div className="flex h-full w-full justify-center items-center">
              <Loading/>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-y-4">
              <div>
                <p>Number of Recode: {data.record.total}</p>
                <p>Number of Trip: {data.record.trip}</p>
              </div>

              <div>
                <div className="flex justify-start items-center gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                  <p className="font-semibold text-lg">Heartrate</p>
                </div>
                <p>Traffic Jam Heartrate: {data.heartrate.trafficjam}</p>
                <p>Normal Heartrate: {data.heartrate.normal}</p>
                <p>Average Heartrate: {data.heartrate.average}</p>
              </div>

              {/* <p className="text-gray-800 mt-6">Last Update: {data.last_update}</p> */}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          {data &&  
          (<div className="flex flex-col items-center justify-center gap-y-4 w-full">
            <div className="flex items-center justify-center gap-x-4 py-[4vh] w-[16vw]  bg-gray-200 rounded-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-database-fill" viewBox="0 0 16 16">
                <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223"/>
                <path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                <path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
                <path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972"/>
              </svg>
              <p className="text-2xl font-bold">{data.record.total} records</p>
            </div>

            <div className="flex items-center justify-center gap-x-4 w-[16vw] py-[2vh] bg-gray-200 rounded-[20px]">
              <p className="text-2xl font-bold">{data.record.trip} trips</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-map-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
              </svg>
            </div>
          </div>)}
        </div>
      </div>

      {/* Heart Rate Box */}
      <div className="h-full">
        {data === undefined ? (
          <Loading/>
        ) : (
          <BarChart title={"Average Heart Rate"}label={"Heart Rate (bpm)"} labels={["normal", "trafficjam"]} dataset={[data.heartrate.normal, data.heartrate.trafficjam]} />
        )}
      </div>

      {/* Traffic Box */}
      <div className="h-full">
        {data === undefined ? (
          <Loading/>
        ) : (
          <PieChart label={"Number of Record"} labels={["trafficjam", "normal"]} dataset={[data.record.trafficjam, data.record.normal]} />
        )}
      </div>
      

    </div>
  );
}
