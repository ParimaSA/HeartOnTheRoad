import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';

export default function PieChart({label, labels, dataset}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null); 

  useEffect(() => {
    const ctx = canvasRef.current;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: dataset,
            backgroundColor: [
              'rgba(255, 189, 190, 1)',
              'rgba(178, 239, 116, 1)',
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
            text: 'Number of record',
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
    <div className="w-full h-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}