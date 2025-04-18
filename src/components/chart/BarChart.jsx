import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function BarChart({title, label, labels, dataset}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); 

  useEffect(() => {
    const ctx = canvasRef.current;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: dataset,
            backgroundColor: [
              'rgba(178, 239, 116, 1)',
              'rgba(255, 189, 190, 1)',
            ],
            borderWidth: 0,
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
            text: title,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [label, labels, dataset]);

  return (
    <div data-testid="bar-chart" className="h-full w-full flex items-center justify-center px-8">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
}