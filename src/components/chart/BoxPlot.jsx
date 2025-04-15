"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ApexCharts to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BoxPlotChart() {
  const [state] = useState({
    series: [
      {
        type: "boxPlot",
        data: [
          { x: "traffic jam", y: [54, 66, 69, 75, 88] },
          { x: "normal", y: [43, 65, 69, 76, 81] },
          { x: "Jan 2017", y: [31, 39, 45, 51, 59] },
          { x: "Jan 2018", y: [39, 46, 55, 65, 71] },
          { x: "Jan 2019", y: [29, 31, 35, 39, 44] },
          { x: "Jan 2020", y: [41, 49, 58, 61, 67] },
          { x: "Jan 2021", y: [54, 59, 66, 71, 88] },
        ],
      },
    ],
    options: {
      chart: {
        type: "boxPlot",
        height: 350,
      },
      title: {
        text: "Heart Rate distribution by Traffic Condition",
        align: "left",
      },
      plotOptions: {
        boxPlot: {
          colors: {
            upper: "#5C4742",
            lower: "#A5978B",
          },
        },
      },
      xaxis: {
        type: "category",
      },
    },
  });

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="boxPlot"
        height={350}
      />
    </div>
  );
}
