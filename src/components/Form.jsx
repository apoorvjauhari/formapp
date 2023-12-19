import { useState } from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';
import PersonalInfo from './PersonalInfo';


const steps = ['Personal Info'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    //Function to handle the onclick of the Download PDF button
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      residence: '',
      course:'',
      gender:'',
      location:''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email'),
      password: Yup.string()
        .min(8),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
      firstName: Yup.string()
        .required('First Name is required'),
      lastName: Yup.string()
        .required('Last Name is required'),
        course: Yup.string()
        .required('Course Name is required'),
        gender: Yup.string()
        .required('Gender is required'),
        location: Yup.string()
        .required('Location  is required'),
    }),


    onSubmit: () => {
      ////////// On Submission Create A PDF of the Data
    }
  });
  

  const formContent = (step) => {
    return <PersonalInfo formik={formik} />;
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 10,
        alignItems:"center",
        gravity:'center'
      }}
    >
      <h1>Contact Form</h1>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Enter Your Details
          </Typography>
          
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px' }}
        >
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid
            item
            xs={12}
          >
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Grid>
        )}
        <Grid
          item
          xs={12}
        >
          <Button
            variant="contained"
            onClick={handleBack}
          >
            Download PDF
          </Button>
          
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form;