import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuProfile from '../components/MenuProfile';
import { Button, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import AddStoryButton from '../components/AddStoryButton';

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
  resize:{
    fontSize:35,
  },
  textField: {
    height: '100%',
},
}));

export default function NewStory() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: 'transparent', boxShadow:"none"}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Button href="home">
                <img src="https://icon-library.net/images/e-icon/e-icon-29.jpg" height="30" width="30"/>
                Draft
            </Button>
          </Typography>
          <div className={classes.search} style={{backgroundColor: '#F5F5F5', color: 'black'}}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Box display="flex" flexDirection="row-reverse"><Button variant="contained">Publish</Button></Box>
          </div>
            <IconButton ><NotificationsNoneIcon /></IconButton >
            <MenuProfile />
        </Toolbar>
      </AppBar>
      <Grid container style={{width:"60%", margin:"auto"}}>
        <Grid xs={1} style={{marginTop:"5%"}}>
          <AddStoryButton/>
        </Grid>
        <Grid xs={11}>
          <TextField placeholder="Title" multiline fullWidth InputProps={{ style: { fontSize: 40 } }} style={{marginTop:"5%"}}/>
        </Grid>
        <Grid xs={1} style={{marginTop:"3%"}}>
          <AddStoryButton/>
        </Grid>
        <Grid xs={11}>
          <TextField placeholder="Tell your story..." multiline fullWidth InputProps={{ style: { fontSize: 20 } }} style={{marginTop:"5%"}}/>
        </Grid>
      </Grid>
    </div>
  );
}