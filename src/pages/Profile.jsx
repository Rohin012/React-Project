import React from 'react'
import SideNav from '../components/SideNav';
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
    <Box sx={{ display: 'flex' }}>
    <SideNav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid item>
          <Typography variant="h2">Profile</Typography>
        </Grid>
        <Grid item xs style={{ width: "100%" }}>
          <Paper
            style={{
              padding: "20px",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              //   width: "60%",
            }}
          >
            <Grid container direction="column" alignItems="stretch" spacing={3}>
              <Grid item>
                <TextField
                  label="Name"
                //   value={profileDetails.name}
                //   onChange={(event) => handleInput("name", event.target.value)}
                //   className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Bio (upto 250 words)"
                  multiline
                  rows={8}
                  style={{ width: "100%" }}
                  variant="outlined"
                //   value={profileDetails.bio}
                //   onChange={(event) => {
                //     if (
                //       event.target.value.split(" ").filter(function (n) {
                //         return n != "";
                //       }).length <= 250
                //     ) {
                //       handleInput("bio", event.target.value);
                //     }
                //   }}
                />
              </Grid>
              <Grid
                item
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
    
              >
              <TextField  label="Number" variant="outlined" type="number" fullWidth
                  style={{ width: "100%" }} />
                 {/* <PhoneInput
                  country={"in"}
                  value={phone} 
                 onChange={(phone) => setPhone(phone)}
                  style={{ width: "auto" }}
                />  */}
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px", marginTop: "30px" }}
             // onClick={() => handleUpdate()}
            >
              Update Details
            </Button>
          </Paper>
        </Grid>
      </Grid>   
       </Box>
    </Box>
  )
}
