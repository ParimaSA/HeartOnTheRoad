"use client";

import TimeBox from "@/components/time/TimeDataBox";
import { useState } from "react";

export default function Time() {

  const [hour, setHour] = useState(8);

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col">

      <div className="flex flex-col h-full w-full justify-between overflow-hidden p-4 lg:px-20 lg:pt-8">

        <div className="flex justify-center items-center w-full h-full overflow-hidden py-4 px-4">
          <TimeBox hour={hour} setHour={setHour}/>
        </div>
          
      </div>

      <div
        className="relative w-full h-[80px]"
        style={{
          backgroundImage: `url('/pinkpattern.png'), url('/pinkpattern.png')`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
          opacity: 0.5, // if you want global transparency
        }}
      ></div>

    </div>
  )
}