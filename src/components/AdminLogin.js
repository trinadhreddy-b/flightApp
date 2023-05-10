import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Box,Grid,Paper,TextField,Button, Typography } from '@mui/material';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function AdminLogin({setAdminLoggedIn}) {

    const navigate=useNavigate();
    const [inputVal,setInputVal]=useState({
      username: "admin",
      password: "123456",  
    });
    const clickHandler=()=>{
      
        navigate('/admin')
        setAdminLoggedIn(true);

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
          <Header adminPage />
          <Box className="content">
          <div className="hero-image">
          <Grid container className="login-form" sx={{p:2}} justifyContent="flex-end">
          <Paper sx={{ p: 2 }}>
            
            <Typography variant="h5" color="primary">Login</Typography>
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
              <Button  variant="contained" onClick={clickHandler}>ADMIN LOGIN</Button>               
               </Grid>              
            </Paper>
            </Grid>
          </div>
          </Box>
          <Footer />
        </Box>
      );
    };
    
    export default AdminLogin;