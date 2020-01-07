import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBarHome from './components/AppbarHome';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';

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
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBarHome/>
    <div className={classes.root} style={{width:"60%", margin:"auto", marginTop:"50px"}}>
      <Box>
        <Grid container>
          <Grid xs={9}>
            <Typography variant="h3">
              Your stories
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Tooltip title="Import a story">
              <IconButton>
                <ImportExportIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Write a story">
              <IconButton>
                <CreateIcon/>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
      <AppBar position="static" color="transparant" style={{boxShadow:"none"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Drafts 1" {...a11yProps(0)} />
          <Tab label="Published" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box style={{textAlign:"center", marginBottom:"20%", marginTop:"20%"}}>
          <Typography>You have no drafts</Typography>
          <Typography>Write on the go with our iOS and Android apps!</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box style={{textAlign:"center", marginBottom:"20%", marginTop:"20%"}}>
          <Typography>You haven’t published any public stories yet.</Typography>
        </Box>
      </TabPanel>
    </div>
    
    </div>
  );
}