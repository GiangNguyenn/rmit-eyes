import React from 'react';
import { BarChart } from './util/BarChart';
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
const today = new Date();
const thirtyDaysPriorDate = new Date(today).setDate(today.getDate() - 7);

const daysArray = getDates(thirtyDaysPriorDate, today).map((day) =>
  day.toISOString().substring(5, 10).replaceAll('-', '/'),
);

function ApprovedRejectedRequestByDate() {
  return (
    <ContainerCard
      chart={
        <BarChart
          title="Registration Request by date"
          labels={daysArray}
          type="stacked"
          dataPoint1={{
            label: 'Pending',
            fill: true,
            barThickness: 'flex',
            backgroundColor: 'grey',
            data: daysArray.map((e) => ~~(Math.random() * (1000 - 10) + 10)),
          }}
          dataPoint2={{
            label: 'Approved',
            fill: true,
            barThickness: 'flex',
            backgroundColor: 'pink',
            data: daysArray.map((e) => ~~(Math.random() * (1000 - 10) + 10)),
          }}
          dataPoint3={{
            label: 'Rejected',
            fill: true,
            barThickness: 'flex',
            backgroundColor: 'blue',
            data: daysArray.map((e) => ~~(Math.random() * (1000 - 10) + 10)),
          }}
        />
      }
   />
  );
}

export default ApprovedRejectedRequestByDate;
