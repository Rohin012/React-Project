import React from 'react'
import SideNav from '../components/SideNav';
import NavBar from '../components/Navbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

export default function Analytics() {
    return (
        <>
            <NavBar />
            <Box height={70} />
            <Box sx={{ display: 'flex', background: "#d2d2d2" }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2} columns={13}>
                    
                        <Grid item xs={4} sx={{height: 40 + "vh" ,background:"#ffffff",m:1}}>
                            
                        </Grid>

                        <Grid item xs={8} sx={{height: 40 + "vh" ,background:"#ffffff", m:1}}>
                            
                        </Grid>
                        <Box height={20} />
                        <Grid item xs={8} sx={{height: 40 + "vh" ,background:"#ffffff" ,m:1}}>
                           
                        </Grid>
                        <Grid item xs={4} sx={{height: 40 + "vh" ,background:"#ffffff",m:1}}>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
