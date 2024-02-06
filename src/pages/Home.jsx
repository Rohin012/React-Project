import React from 'react';
import SideNav from '../components/SideNav';
import NavBar from '../components/Navbar';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
    <NavBar/>
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div>Home</div>
    </Box>
    </Box>
    
    </>
  )
}
