import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AppBarOther from '../components/AppBarOther';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Bookmarks() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBarOther/>
      <Grid container style={{width:"90%", margin:"auto"}}>
        <Typography style={{fontWeight:"fontWeightBold", fontSize:40, marginTop:"50px"}}>Bookmarks</Typography>
      </Grid>
      <Grid container>
      <Box border={1} style={{width:"90%", margin:"auto", height:"70px"}}>
        <Grid container style={{width:"100%", margin:"auto"}}>
          <Grid xs={1}>
            <BookmarkBorderIcon style={{fontSize: 40, marginTop:"15px", marginLeft:"15px"}}/>
          </Grid>
          <Grid xs={10}>
            <Typography style={{fontSize:40}}>Offline reading is here.</Typography>
          </Grid>
          <Grid xs={1}>
            <Typography style={{fontSize:40}}><Button variant="contained">Upgrade</Button></Typography>
          </Grid>
        </Grid>
      </Box>
      </Grid>
              
    </div>
  );
}
