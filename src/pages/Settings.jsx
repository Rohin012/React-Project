import React from 'react'
import SideNav from '../components/SideNav';
import NavBar from '../components/Navbar';
import { Box } from '@mui/material';
import {
    Button,
    Grid,
    Typography,
    Modal,
    Paper,
    makeStyles,
    TextField,
    MenuItem,
  } from "@mui/material";
 // import axios from "axios";
 // import ChipInput from "material-ui-chip-input";

export default function AddJob() {
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


