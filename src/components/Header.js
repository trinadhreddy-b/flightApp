import React from 'react';
import { AppBar, Toolbar,Typography,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const {homePage,loginPage,registerPage,adminPage,setAdminLoggedIn,loggedIn}=props;
  
  const navigate= useNavigate();

  const adminDashboard=()=>{
      navigate('/admin');
  }
  const loginHandler=()=>{
    navigate('/login');
}
  const logoutHandler=()=>{   
    localStorage.removeItem("username");
      navigate('/');  
  }
  const registerHandler=()=>{
    navigate('/register');
  }

  const adminLogoutHandler=()=>{
    setAdminLoggedIn(false);
  }
  const bookingPage=()=>{
     navigate('/');
  }

    if(localStorage.getItem("username")){
      return (

        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flight Booking App
          </Typography>
          <Typography variant="h6" sx={{p:2}}>
            hi, {localStorage.getItem("username")}
          </Typography>
          <Button color="inherit" onClick={logoutHandler}>Logout</Button> 
        </Toolbar>
        </AppBar>
          
      )
    }

  return (
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flight Booking App
          </Typography>
          {homePage && (<>
          <Button color="inherit" onClick={loginHandler}>Login</Button>
          <Button color="inherit" onClick={registerHandler}>Register</Button>
          <Button color="inherit" onClick={adminDashboard}>Admin Dashboard</Button>
          </>
          )}
          {registerPage && (<>
          <Button color="inherit" onClick={loginHandler}>Login</Button>
          <Button color="inherit" onClick={adminDashboard}>Admin Dashboard</Button>
          </>
          )}
           {loginPage && (<>
          <Button color="inherit" onClick={registerHandler}>Register</Button>
          <Button color="inherit" onClick={adminDashboard}>Admin Dashboard</Button>
          <Button color="inherit" onClick={bookingPage}>Go to Booking</Button>
          </>
          )}
          {loggedIn && (<>
            <Typography variant="h6" sx={{p:2}}>
            hello admin
          </Typography>
          <Button color="inherit" onClick={adminLogoutHandler}>Logout</Button> 
          </>
          )}
           
          {adminPage && (<>
          <Button color="inherit" onClick={loginHandler}>Login</Button>
          <Button color="inherit" onClick={registerHandler}>Register</Button> 
          <Button color="inherit" onClick={bookingPage}>Go to Booking</Button>
          </>
          )}   
        </Toolbar>
      </AppBar>
  )
}

export default Header;