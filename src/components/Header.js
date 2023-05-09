import React from 'react';
import { AppBar, Toolbar,Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate= useNavigate();

  const adminDashboard=()=>{
      navigate('/admin');
  }
  const loginHandler=()=>{
    navigate('/login');
}
  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flight Booking App
          </Typography>
          <Button color="inherit" onClick={loginHandler}>Login</Button>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit" onClick={adminDashboard}>Admin Dashboard</Button>
        </Toolbar>
      </AppBar>
  )
}

export default Header;