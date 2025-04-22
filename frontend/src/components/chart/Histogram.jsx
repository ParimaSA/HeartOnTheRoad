"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Histogram({ data, binSize = 5, title, xaxis, keyValue, color }) {
  const [chartData, setChartData] = useState({
    series: [],
    options: {},
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const histData= data.map((d) => Math.round(d[keyValue]));
      const min = Math.floor(Math.min(...histData) / binSize) * binSize;
      const max = Math.ceil(Math.max(...histData) / binSize) * binSize;

      // Create bins
      const bins = {};
      for (let i = min; i < max; i += binSize) {
        const label = `${i}-${i + binSize - 1}`;
        bins[label] = 0;
      }

      // Count object in each bin
      histData.forEach((rate) => {
        const binStart = Math.floor(rate / binSize) * binSize;
        const label = `${binStart}-${binStart + binSize - 1}`;
        if (bins[label] !== undefined) {
          bins[label]++;
        }
      });

      const categories = Object.keys(bins);
      const frequencies = Object.values(bins);

      setChartData({
        series: [
          {
            name: "Frequency",
            data: frequencies,
          },
        ],
        options: {
          chart: {
            type: "bar",
            height: 350,
          },
          title: {
            text: title,
            align: "center",
          },
          xaxis: {
            categories,
            title: {
              text: xaxis,
            },
            labels: {
              rotate: -45,
            },
          },
          yaxis: {
            title: {
              text: "Frequency",
            },
          },
          tooltip: {
            y: {
              formatter: (val) => `${val} occurrences`,
            },
          },
          plotOptions: {
            bar: {
              columnWidth: "100%",
              borderRadius: 0,
            },
          },
          colors: [color],
          labels: {
            style: {
              colors: "#6B7280", // Tailwind gray-500
              fontSize: "12px",
            },
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ['#6B7280'],
              fontSize: '12px',
            },
          },
        },
      });
    }
  }, [data, binSize, color]);

  return (
    <div data-testid="histogram" className="h-full w-full">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
}
