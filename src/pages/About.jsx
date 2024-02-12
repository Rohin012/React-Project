import React from 'react'
import SideNav from '../components/SideNav';
import NavBar from '../components/Navbar';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import {
    Button,
    Grid,
    Typography,
    Modal,
    Paper,
    makeStyles,
 //   TextField,
  } from "@mui/material";
  //import PhoneInput from "react-phone-input-2";

export default function Profile() {
  return (
    <>
    <NavBar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

   </Box>
    </Box>
    </>
  )
}
