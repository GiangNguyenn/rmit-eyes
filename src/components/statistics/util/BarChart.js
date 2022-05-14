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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function BarChart(props) {
  const { datasets, labels, title, type, dataPoint1, dataPoint2, dataPoint3 } = props;
  type === 'stacked'
    ? console.log('first', [dataPoint1, dataPoint2, dataPoint3])
    : console.log('first', [datasets]);

  const options = {
    legend: { display: true },
    plugins: {
      datalabels: {
        display: false,
        color: '#000',
        font: { size: 12 },
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels: labels,
    datasets: type === 'stacked' ? [dataPoint1, dataPoint2, dataPoint3] : [datasets],
  };
  return <Bar data={data} options={options} />;
}
