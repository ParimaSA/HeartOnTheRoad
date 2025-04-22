import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function ScatterPlot({ label, data }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); 

  useEffect(() => {
    const ctx = canvasRef.current;
    const mappedHeartRateData = data.map(item => ({
        x: item.heartrate,
        y: item.ratio
    }));

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'scatter', 
      data: {
        datasets: [
          {
            label: label,
            data: mappedHeartRateData,
            backgroundColor: 'rgba(216, 22, 21, 1)',
            borderColor: 'rgba(216, 22, 21, 1)',
            borderWidth: 1,
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Heart Rate vs Traffic Ratio',
          },
        },
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
          },
          y: {
            type: 'linear',
            position: 'left',
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [label, data]);

  return (
    <div data-testid="scatter" className="h-full w-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}
