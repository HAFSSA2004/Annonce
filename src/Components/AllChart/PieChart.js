import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);

export default function PieChart(props) {
  console.log('Labels received in PieChart:', props.labels);  // Debugging labels
  return (
    <div className="chart-container">
      <Pie
        data={{
          labels: props.labels,  // Accepts dynamic labels
          datasets: [
            {
              label: props.name,
              data: props.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
              ],
            },
          ],
        }}
      />
    </div>
  );
}
