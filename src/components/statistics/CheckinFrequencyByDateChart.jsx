import React from 'react';
import { BarChart } from './util/BarChart';
import ContainerCard from './util/ContainerCard';

const datasets = {
  label: 'Checkins',
  fill: true,
  barThickness: 'flex',
  backgroundColor: 'pink',
  data: [...Array(7)].map((e) => ~~(Math.random() * (1000 - 10) + 10)),
};

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

export default function CheckinFrequencyByDateChart() {
  const today = new Date();
  const thirtyDaysPriorDate = new Date(today).setDate(today.getDate() - 7);

  const daysArray = getDates(thirtyDaysPriorDate, today).map((day) =>
    day.toISOString().substring(5, 10).replaceAll('-', '/'),
  );
  return (
    <ContainerCard
      chart={
        <BarChart
          type="normal"
          title="Check-in frequency by date for the last week"
          labels={daysArray}
          datasets={datasets}
        />
      }
    />
  );
}
