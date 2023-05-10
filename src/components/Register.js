import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Box,Grid,Paper,TextField,Button,Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

function Login() {
    const navigate=useNavigate();
    
    const [inputVal,setInputVal]=useState({
        username: "",
        password: "",
        confirmPassword: ""
    
      });
    const clickHandler=()=>{
      enqueueSnackbar("Registered sucessfully",{variant:"success"});
      navigate("/login");
    };

    const handleOnChange=(e)=>{
        setInputVal({
          ...inputVal,
          [e.target.name]:e.target.value
          
        })
    
      };
    
  return (   
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          minHeight="100vh"
        >
          <Header registerPage />
          <Box className="content">
          <div className="hero-image">
          <Grid container className="login-form" sx={{p:2}} justifyContent="flex-end">
          <Paper sx={{ p: 2 }}>
            
            <Typography variant="h5" color="primary">Register</Typography>
            <Grid item xs={12} marginTop={2}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                onChange={handleOnChange}
                title="Username"
                name="username"
                fullWidth
                placeholder="Enter Username"
              />
              </Grid>
              <Grid item xs={12} marginTop={2}>
              <TextField
                id="password"
                variant="outlined"
                onChange={handleOnChange}
                label="Password"
                name="password"
                type="password"
                fullWidth
                placeholder="Enter a password with minimum 6 characters"
              />
              </Grid>
              <Grid item xs={12} marginTop={2}>
              <TextField
                id="confirmPassword"
                variant="outlined"
                onChange={handleOnChange}
                label="Confirm password"
                name="confirmPassword"
                type="password"
                fullWidth
                placeholder="Retype password"
              />
              </Grid>
              <Grid item xs={12} marginTop={2}>
               <Button variant="contained" onClick={clickHandler}>REGISTER NOW</Button>
               </Grid>
               <Grid item xs={12}>
              <p className="secondary-action">
              Already have an account?{" "}
                 <Link to="/login">
                 Login
                 </Link>
              </p>
              </Grid>
              
            </Paper>
            </Grid>
          </div>
          </Box>
          <Footer />
        </Box>
      );
    };
    
    export default Login;