import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AppBarOther from './AppBarOther';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

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

export default function Comment() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return (
      <div className={classes.root}>
        <AppBarOther/>
        <Grid container>
          <Grid style={{width:"60%", margin:"auto", marginTop:"50px"}}>
            <Typography>Showing responses for:</Typography>
            <Paper>
              <Grid xs={12} style={{width:"95%", margin:"auto"}}>
                  <Typography variant="h6">Fish Love
                    <IconButton style={{marginLeft:"65%", alignItems:"right"}}><img src="https://static.thenounproject.com/png/1471176-200.png" height="30" width="30"/></IconButton>7.5k
                    <IconButton style={{ alignItems:"right"}}><ChatBubbleIcon/></IconButton>36
                  </Typography>                    
                <Typography variant="subtitle1">Emma Lindsay</Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid style={{width:"60%", margin:"auto", marginTop:"50px"}}>
            <Paper>
              <Grid xs={12} style={{width:"90%", margin:"auto"}}>
                <Avatar style={{height:40, width:40, marginTop:"10px"}}alt="Remy Sharp" src="https://miro.medium.com/fit/c/40/40/0*N-COS3Rl-CdTwAEd"/>
                <TextField placeholder="Tell your story..." multiline fullWidth InputProps={{ style: { fontSize: 20 }}}/>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }