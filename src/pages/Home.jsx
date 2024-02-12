import React from 'react';
import SideNav from '../components/SideNav';
import NavBar from '../components/Navbar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../Dash.css'


export default function Home() {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ maxWidth: 350 }}>

                  <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>

                </Card>
                <Card sx={{ maxWidth: 350 }}>

                  <CardContent>
                    
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>

                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }}>

                  <CardContent>
                    <span>$ 234</span>
                    <span>Total Income</span>

                  </CardContent>

                </Card>
                <Card sx={{ maxWidth: 345 }}>

                  <CardContent>
                  <span>$ 234</span>
                    <span>Total Income</span>

                  </CardContent>

                </Card>
              </Stack>

            </Grid>

          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>


                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>


                </CardContent>

              </Card>
            </Grid>

          </Grid>

        </Box>
      </Box>

    </>
  )
}
