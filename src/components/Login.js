import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Box,Stack,TextField,Button,Link } from '@mui/material';
import { useState } from 'react';
import {CircularProgress} from '@mui/material';

function Login() {

    const [isLoading,loadingStatus]=useState(false);
    const [inputVal,setInputVal]=useState({
      username: "",
      password: "",  
    });
    const clickHandler=()=>{

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
          <Header hasHiddenAuthButtons />
          <Box className="content">
            <Stack spacing={2} className="form">
            <h2 className="title">Login</h2>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                onChange={handleOnChange}
                title="Username"
                name="username"
                placeholder="Enter Username"
              />
              <TextField
                id="password"
                variant="outlined"
                onChange={handleOnChange}
                label="Password"
                name="password"
                type="password"
                placeholder="Enter a password with minimum 6 characters"
              />
              {isLoading ?
                (<div style={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
                </div>)
                :(
               <Button className="button" variant="contained" onClick={clickHandler}>LOGIN</Button>
               )}
              <p className="secondary-action">
              Dont have an account?{" "}
                 <Link to="/register">
                 Register now
                 </Link>
              </p>
            </Stack>
          </Box>
          <Footer />
        </Box>
      );
    };
    
    export default Login;