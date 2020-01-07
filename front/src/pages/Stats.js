import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBarOther from '../components/AppBarOther';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Stats() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBarOther/>
      <Grid container style={{width:"80%", margin:"auto", marginTop:"70px"}}>
        <Grid xs={12} style={{}}>
            <Typography style={{fontSize:40}}>Stats</Typography>
        </Grid>
        <Grid xs={9} style={{}}>
            <Typography style={{fontSize:15, color:"#CECECE"}}>Click story below to view in chart</Typography>
        </Grid>
        <Grid xs={3} style={{}}>
            <Typography style={{fontSize:12, color:"#CECECE"}} align="right">Learn more about using stats</Typography>
        </Grid>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
            >
                <Tab label="Views" {...a11yProps(0)}/>
                <Tab label="Reads" {...a11yProps(1)}/>
                <Tab label="Fans" {...a11yProps(2)}/>
            </Tabs>
            <TabPanel value={value} index={0}>
              <Typography variant="h1">
                0
              </Typography>
              <Typography variant="subtitle1">
                Views(30 days)
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="h1">
                0
              </Typography>
              <Typography variant="subtitle1">
                Reads(30 days)
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Typography variant="h1">
                0
              </Typography>
              <Typography variant="subtitle1">
                Fans(30 days)
              </Typography>
            </TabPanel>
        </Paper>
      </Grid>
    </div>
  );
}