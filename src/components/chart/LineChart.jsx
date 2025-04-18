'use client';
import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Loading from '../Loading';

export default function LineChart({ data }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) return; // If there's no data, do nothing

    const ctx = canvasRef.current;
    if (!ctx) return; // Check if the canvas context exists

    // Destroy the existing chart if it's present to avoid multiple charts being created
    let chartStatus = Chart.getChart(ctx);
    if (chartStatus) {
      chartStatus.destroy();
    }

    const labels = data.map((point) =>
      new Date(point.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    );

    const values = data.map((point) => point.heartrate);

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Heart Rate (bpm)',
            data: values,
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          title: {
            display: true,
            text: 'Heart Rate Over Time',
            font: {
              size: 16,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'BPM',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Time',
            },
            ticks: {
              maxRotation: 45, 
              minRotation: 30, 
            },
          },
        },
      },
    });
  }, [data]);

  return (
    <div data-testid="line-chart" className="h-full w-auto">
      {data && data.length > 0 ? (
        <canvas ref={canvasRef} />
      ) : (
        <div className='w-full h-full flex justify-center items-center'><Loading/></div>
      )}
    </div>
  );
}
