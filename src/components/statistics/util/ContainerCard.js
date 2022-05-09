import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ContainerCard(props) {
  const { chart } = props;
  return (
    <Card sx={{ minWidth: '25%', margin: '20px',  position:"relative" }}>
      <CardContent>
        <CardContent>{chart}</CardContent>
      </CardContent>
    </Card>
  );
}

export default ContainerCard;
