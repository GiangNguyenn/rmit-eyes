import React from 'react';
import DailyCheckinFrequencyBarChart from '../../components/statistics/DailyCheckinFrequencyBarChart';
import { Grid } from '@mui/material';
import MeanTemperatureComponent from '../../components/statistics/MeanTemperatureComponent';
import CheckinSuccessFailRatioChart from '../../components/statistics/CheckinSuccessFailRatioChart';
import CheckinFrequencyByDateChart from '../../components/statistics/CheckinFrequencyByDateChart';
import ApprovedRejectedRequestByDate from '../../components/statistics/ApprovedRejectedRequestByDate';

function StatisticsScreen() {
  return (
    <Grid
      container
      columns={12}
      style={{ display: 'flex', position: 'relative' }}
      justifyContent="space-between"
    >
      <Grid item xs={6}>
        <DailyCheckinFrequencyBarChart />
      </Grid>
      <Grid item xs={6}>
        <MeanTemperatureComponent />
      </Grid>
      <Grid item xs={2.8}>
        <CheckinSuccessFailRatioChart />
      </Grid>
      <Grid item xs={4.6}>
        {' '}
        <ApprovedRejectedRequestByDate />
      </Grid>
      <Grid item xs={4.6}>
        {' '}
        <CheckinFrequencyByDateChart />
      </Grid>
    </Grid>
  );
}

export default StatisticsScreen;
