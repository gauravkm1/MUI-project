import React from 'react';
import './style.css';
import { AppBar,Toolbar,Typography} from "@mui/material";
import{Link} from 'react-router-dom';
export const MuiNavbar = () =>  {
    return(
     
      <Toolbar className='custom-navbar'>
        <Typography variant='h6' component='div' className='margined'> <Link aria-current="page" className='nav-link' to={'/Default'}>Default</Link> </Typography>
        <Typography variant='h6' component='div' className='margined'> <Link aria-current="page" className='nav-link' to={'/Home'}>Home</Link> </Typography>
        <Typography variant='h6' component='div' className='margined'> <Link aria-current="page" className='nav-link'  to={'/Contact'}>Contact</Link> </Typography>
      </Toolbar>
    );
}

export default MuiNavbar;