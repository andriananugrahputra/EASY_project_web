import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AppBarOther from '../components/AppBarOther';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
}));

export default function Profile() {
    const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBarOther/>
      <Grid container style={{width:"40%", margin:"auto", marginTop:"50px"}}>
        <Grid xs={10} >
          <Typography style={{fontSize:37, fontWeight:"fontWeightBold"}}>Andrian Anugrah Putra<Button variant="contained" size="small" style={{marginLeft:"auto"}}>Edit profile</Button></Typography>
          <Typography style={{fontSize:15}}>1 Following 1 Followers</Typography>
        </Grid>
        <Grid xs={2}>
          <Avatar style={{height:128, width:128}}alt="Remy Sharp" src="https://miro.medium.com/fit/c/256/256/0*N-COS3Rl-CdTwAEd"/>
        </Grid>
        <Typography style={{fontSize:15, marginTop:"50px"}}>Andrian Anugrahputra hasn’t been active on Medium yet. Check back later to see their stories, claps, and highlights.</Typography>
      </Grid>
    </div>
  );
}