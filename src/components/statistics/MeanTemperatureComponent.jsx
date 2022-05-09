import React from 'react';
import CardContent from '@mui/material/CardContent';
import { LineChart } from './util/LineChart';
import { Card } from '@mui/material';
import ContainerCard from './util/ContainerCard';

const getDates = (startDate, endDate) => {
  let dates = [];
  //to avoid modifying the original date
  const theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return dates;
};

function MeanTemperatureComponent() {
  const today = new Date();
  const thirtyDaysPriorDate = new Date(today).setDate(today.getDate() - 7);

  const daysArray = getDates(thirtyDaysPriorDate, today).map((day) =>
    day.toISOString().substring(5, 10).replaceAll('-', '/'),
  );
  return (
    <ContainerCard
      chart={
        <LineChart
          backgroundColor="red"
          title="Daily mean temperature"
          labels={daysArray}
          dataPoints={[34.5, 36.2, 37, 36.7, 35.9, 36.5, 35]}
          mean={[34.5, 36.2, 37, 36.7, 35.9, 36.5, 35].reduce((cur, next) => cur + next, 0) / 7}
        />
      }
    />
  );
}

export default MeanTemperatureComponent;
