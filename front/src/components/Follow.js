import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function Follow() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container> 
            <Grid xs={12} style={{marginTop:"25px", marginBottom:"25px"}}>
              <Button variant="contained">Books</Button>
              <Button variant="contained">Self Improvement</Button>
              <Button variant="contained">Productivity</Button>
              <Button variant="contained">Life</Button>
              <Button variant="contained">Life lesson</Button>
            </Grid>
            <Grid xs={1}>
            <IconButton><svg width="33" height="33" viewBox="0 0 33 33"><path d="M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z" fill-rule="evenodd"></path></svg></IconButton>
            </Grid>
            <Grid xs={7}>
            <Typography>54K claps</Typography>
            </Grid>
            
            <Grid xs={4}>
            <IconButton><TwitterIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><BookmarkBorderIcon /></IconButton>
              <IconButton><MoreHorizIcon /></IconButton>
            </Grid>
        </Grid>
        <Grid container>
            <Box borderTop={1} style={{marginTop:"25px", marginBottom:"25px"}}>
                <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                    <Box borderTop={1}/>
                    <Grid xs={2}>
                        <Avatar style={{height:80, width:80}}alt="Remy Sharp" src="https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png" width="80" height="80"/>
                    </Grid>
                    <Grid xs={8}>
                        <Typography style={{fontSize: 18}}>WRITTEN BY</Typography>
                        <Typography style={{fontSize: 24}}>Ryan Holiday</Typography>
                        <Typography style={{fontSize: 15}}>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</Typography>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant="outlined" size="large">Follow</Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} style={{marginTop:"30px", marginBottom:"30px"}}>
                    <Grid xs={2}>
                        <Avatar style={{height:80, width:80}}alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk2noBKzHOetJ_WFQqr-q7-gXJeoYIYOA4szuNUd9Gjwqq5ZGs" width="80" height="80"/>
                    </Grid>
                    <Grid xs={8}>
                        <Typography style={{fontSize: 24}}>Mission.org</Typography>
                        <Typography style={{fontSize: 15}}>A network of business & tech podcasts designed to accelerate learning. Selected as “Best of 2018” by Apple. Mission.org</Typography>
                    </Grid>  
                    <Grid xs={2}>
                        <Button variant="outlined" size="large">Follow</Button>
                    </Grid>
                </Grid>
                
            </Box>
            <Button variant="outlined" size="large" style={{width:"100%", margin:"auto", marginBottom:"50px"}} href="/comment">See responses</Button>
        </Grid>
    </div>
  );
}