import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export function PieChart(props) {
  const { datasets, labels, backgroundColor, title } = props;

  const option = {
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 20,
          weight: 'bold',
        },
      },
    },
  };
  const data = {
    backgroundColor: backgroundColor,
    labels: labels,
    datasets: datasets,
  };
  return <Pie data={data} options={option} width={'30%'} />;
}
