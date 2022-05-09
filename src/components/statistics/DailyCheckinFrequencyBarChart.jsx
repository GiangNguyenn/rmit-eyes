import React from 'react';
import { BarChart } from './util/BarChart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ContainerCard from './util/ContainerCard';

const dataset = {
  label: 'Check-ins',
  fill: true,
  barThickness: 'flex',
  backgroundColor: 'pink',
  data: [20, 15, 18, 91, 80, 41, 88, 20, 10, 25, 35, 50, 20, 31, 2, 1],
};

export default function DailyCheckinFrequencyBarChart() {
  return (
    <ContainerCard
      chart={
        <BarChart
          type="normal"
          title="Check-in frequency by hour"
          labels={[
            7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0, 17.0, 18.0, 19.0, 20.0, 21.0,
            22.0,
          ]}
          datasets={dataset}
        />
      }
    />
  );
}
