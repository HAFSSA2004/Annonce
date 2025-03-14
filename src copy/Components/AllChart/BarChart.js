import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(props) {
  console.log('Data received in BarChart:', props.data);  // Debugging data received
  return (
    <div className="chart-container">
      <Bar
        redraw={true}
        data={{
          labels: ["Jan/Fev", "Mar/Avr", "Mai/Ju", "Jui/Août", "Sep/Oct", "Nov/Dec"],
          datasets: [
            {
              label: props.name,
              data: props.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              suggestedMax: 20,
            },
          },
        }}
      />
    </div>
  );
}
