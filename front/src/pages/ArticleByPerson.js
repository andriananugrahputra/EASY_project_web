import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuProfile from '../components/MenuProfile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import ArticleByPersonalBody from '../components/ArticleByPersonalBody';

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

export default function ArticleByPerson() {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background: 'transparent'}}>
        <Toolbar style={{width:"90%", margin:"auto"}}>
          <Typography className={classes.title} variant="h6" noWrap>
          <IconButton href="home"><img src="https://icon-library.net/images/e-icon/e-icon-29.jpg" height="30" width="30"/></IconButton>
          </Typography>
          <div className={classes.search} style={{backgroundColor: '#F5F5F5', color: 'black'}}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{root: classes.inputRoot, input: classes.inputInput,}}inputProps={{'aria-label': 'search' }}/>
          </div>
            <IconButton ><NotificationsNoneIcon /></IconButton >
            <MenuProfile />
        </Toolbar>
      </AppBar>
      <Grid container style={{width:"50%", margin:"auto", marginTop:"50px"}}>
        <Grid xs={9}>
          <Typography style={{fontSize:35}}>
            Emma Lindsay
            <Button variant="outlined" color="primary" size="small" style={{marginLeft:"25px"}}>Follow</Button>
            <IconButton><ExpandMoreIcon/></IconButton>
          </Typography>
          <Typography>Facebook: https://www.facebook.com/protectingthecrushed/ — Twitter: https://twitter.com/SassyDotLove</Typography>
          <Typography style={{fontSize:12}}> 
            Medium member since October 2018
          </Typography>
          <Typography style={{fontSize:12}}>101 Following 26K Followers 
            <IconButton><TwitterIcon/></IconButton>
          </Typography>
        </Grid>
        <Grid xs={3}>
            <Avatar style={{height:128, width:128, marginLeft:"25px"}}alt="Remy Sharp" src="https://miro.medium.com/fit/c/128/128/0*n0tPg6pG-9mFpDBF.jpg"/>
        </Grid>
        <Grid xs={12} style={{marginBottom:"5%"}}>
            <Paper square>
              <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
              <Tab label="Profile" />
              <Tab label="Claps" />
              <Tab label="Highlights" />
              <Tab label="Responses" />
            </Tabs>
          </Paper>
        </Grid>
        <ArticleByPersonalBody />
      </Grid>
    </div>
  );
}