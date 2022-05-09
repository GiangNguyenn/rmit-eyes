import React from 'react';
import CardContent from '@mui/material/CardContent';
import { PieChart } from './util/PieChart';
import { Card } from '@mui/material';
import ContainerCard from './util/ContainerCard';

const CheckinSuccessFailRatioChart = () => {
  return (
    <ContainerCard
      chart={
        <PieChart
          backgroundColor="red"
          title="Check-in status ratio"
          labels={['Success', 'Failed']}
          datasets={[
            {
              data: [98, 2],
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
              borderWidth: 1,
            },
          ]}
        />
      }
    />
  );
};

export default CheckinSuccessFailRatioChart;
