import React from 'react';
import SideNav from '../components/SideNav';
import NavBar from '../components/Navbar';
import AccordionDash from '../components/AccodianDash';
import BarChart from '../Charts/BarCharts';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Home() {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex',background:"#d2d2d2" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>

                  <CardContent>
                    <div className='iconstyle'>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      $ 600
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                      Total Earnings
                    </Typography>
                  </CardContent>

                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>

                  <CardContent>
                    <div className='iconstyle'>
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff"}}>
                      $ 900
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                      Total Order
                    </Typography>
                  </CardContent>

                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className='gradientlight'>


                  <Stack spacing={2} direction="row">
                    <span className='iconstyle'>
                      <StorefrontIcon />
                    </span>
                    <div className='paddingall'>
                      <span className='pricetitle'>$ 234</span>
                      <br />
                      <span className='pricesubtitle'>Total Income</span>

                    </div>
                  </Stack>


                </Card>
                <Card sx={{ maxWidth: 345 }} className='gradient'>

                  <Stack spacing={2} direction="row">
                    <span className='iconstyle'>
                      <StorefrontIcon />
                    </span>
                    <div className='paddingall'>
                      <span className='pricetitle'>$ 234</span>
                      <br />
                      <span className='pricesubtitle'>Total Income</span>

                    </div>
                  </Stack>
                </Card>
              </Stack>

            </Grid>

          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>

              <BarChart/>
                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh" }}>

                <CardContent>

                <AccordionDash/>
                </CardContent>

              </Card>
            </Grid>

          </Grid>

        </Box>
      </Box>

    </>
  )
}
