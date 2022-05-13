import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@mui/system';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Divider from '@material-ui/core/Divider';
import Chip from '@mui/material/Chip';
const style = {
  box: {
    borderRadius: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid gray',
    boxShadow: 12,
    p: 4,
    maxHeight: '80vh',
  },
  imgSlider: {
    maxWidth: 800,
    height: 550,
    flexGrow: 1,
    bgcolor: 'gray',
    borderRadius: 2,
    border: '1px solid', //imageslider bgcolor
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    pl: 2,
    borderRadius: 2,
    bgcolor: '#d5bec4', //imageslider bgcolor
  },
  image: {
    height: 450,
    width: '100%',
    display: 'block',
    overflow: 'auto',
    objectFit: 'cover',
  },
  MobileStepper: {
    borderRadius: 2,
    bgcolor: '#d5bec4', //imageslider bgcolor
  },
};

const useStyles = makeStyles((theme) => ({
  box: {
    borderRadius: 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height: '100%',
    bgcolor: 'background.paper',
    border: '2px solid gray',
    boxShadow: 12,
    p: 4,
    maxHeight: '80vh',
  },
  imgSlider: {
    maxWidth: 800,
    height: 550,
    flexGrow: 1,
    bgcolor: 'gray',
    borderRadius: 2,
    border: '1px solid', //imageslider bgcolor
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    pl: 2,
    borderRadius: 2,
    bgcolor: '#d5bec4', //imageslider bgcolor
  },
  image: {
    height: 450,
    width: '100%',
    display: 'block',
    overflow: 'auto',
    objectFit: 'cover',
  },
  MobileStepper: {
    borderRadius: 2,
    bgcolor: '#d5bec4', //imageslider bgcolor
  },
}));

const STATUS = {
  pending_to_approve: (
    <Chip
      style={{ position: 'absolute', top: '10px', right: '10px' }}
      size="big"
      label="PENDING"
      color="primary"
    />
  ),
  approved: (
    <Chip
      style={{ position: 'absolute', top: '10px', right: '10px' }}
      size="big"
      label="APPROVED"
      color="success"
    />
  ),
};

export default function UserDetail(props) {
  const classes = useStyles();
  console.log(classes);
  console.log(style);
  const { email, image, image_with_mask, phone, sid, status, student_name, vaccine_document } =
    props.user;

  const images = [
    {
      label: 'Image',
      imgPath: <img src={image} />, //{image}
    },
    {
      label: 'Imnage with mask',
      imgPath: <img src={image_with_mask} />, //{image_with_mask}
    },
    {
      label: 'Vaccine document',
      imgPath: <img src={vaccine_document} />, //{vaccine_document}
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={style.box}>
      <Typography variant={'h2'} gutterBottom component="div">
        User Details
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3}>
        <Grid item xs={4} my={3}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mx: 1, fontWeight: 'lighter' }}
            component="div"
          >
            {student_name} - {sid}
            {STATUS[status]}
          </Typography>

          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 3, mx: 1 }}>
            <b> Email: </b> {email}
          </Typography>
          <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2, mx: 1 }}>
            <b> Phone: </b> {phone}
          </Typography>
        </Grid>
        <Grid item xs={8} my={3}>
          <Box sx={style.imgSlider}>
            <Paper square elevation={0} sx={style.label}>
              <Typography sx={style.media}>{images[activeStep].label}</Typography>
            </Paper>
            <Box sx={style.image}>{images[activeStep].imgPath}</Box>
            <MobileStepper
              variant="text"
              sx={style.MobileStepper}
              images={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  Next
                  {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  Back
                </Button>
              }
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </ThemeProvider>
  );
}
