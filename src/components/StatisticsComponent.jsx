import React from 'react'
import DailyCheckinFrequencyBarChart from './statistics/DailyCheckinFrequencyBarChart'
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
  
})
function StatisticsComponent() {
  return (
    <div><DailyCheckinFrequencyBarChart/></div>
  )
}

export default StatisticsComponent
