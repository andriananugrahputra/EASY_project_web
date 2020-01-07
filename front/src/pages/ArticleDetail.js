import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
import Follow from '../components/Follow';
import AppBarOther from '../components/AppBarOther';
import RelatedArticle from '../components/RelatedArticle';

const message = `When I wasn’t dating, for about two years, I struggled with seeing this quality in every potential romantic partner. Sometimes, I’d go on a date with someone, and maybe they’d tell me how pretty I was — but that comment really said nothing about me. Whenever someone tells me I’m beautiful, they’re telling me they love themselves. They’re telling me that they want to be around people and things that give them pleasure, and that my physical appearance gives them pleasure. But, they’re not telling me that they care about me. They’re not telling me that my lived experience is important, or that how I feel matters to them.`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ArticleDetail() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBarOther/>
      <AppBar color="default" position="static" style={{width:"90%", margin:"auto", background: 'transparent', boxShadow: 'none'}}>
          <Grid container>
            <Tabs textColor="primary" variant="scrollable" indicatorColor="primary" color="default" scrollButtons="auto" aria-label="scrollable auto tabs example">
                <Button href="home">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpBRzaZIR-fvg6cC5MCetpLvMfLzloAdJM3IwIj8z8Q8kiMepV" height="30" width="30"/>
                  <Tab label="EASY!" href="#"/>
                </Button>
                <Tab label="ORIGINALS" href="#"/>
                <Tab label="SUBSCRIBE" href="#"/>
            </Tabs>
          </Grid>
        </AppBar>
        <Grid container style={{width:"90%", margin:"auto"}}>
            <Grid xs={12}>
                <img src="https://miro.medium.com/max/2419/1*XkLjxDrEpaHmy68IL_edeQ.jpeg" style={{width:"100%", margin:"auto"}}/>
            </Grid>
        </Grid>
        <Grid container style={{width:"60%", margin:"auto"}}> 
            <Grid item xs={12}>
                <Typography href="#" style={{marginBottom:"25px", fontSize: 12, textAlign:"center", color:"#757575"}}>
                    <Box fontWeight="fontWeightMedium"><Link href="#" underline="always">How to grill a fish</Link></Box>
                </Typography>
                <Typography style={{fontSize: 40}}>
                  Fish Love
                </Typography>
            </Grid>
            <Grid xs={1}>
                <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/96/96/0*n0tPg6pG-9mFpDBF.jpg" />
            </Grid>
            <Grid xs={7}>
                <Typography style={{fontSize: 12}}>Emma Lindsay<Button style={{marginLeft:"3%"}}variant="outlined" color="primary" size="small">Follow</Button></Typography>
                <Typography style={{fontSize: 12}}>Mar 28, 2017 · 6 min read</Typography>
            </Grid>
            <Grid xs={4}>
              <IconButton><TwitterIcon /></IconButton>
              <IconButton><LinkedInIcon /></IconButton>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><BookmarkBorderIcon /></IconButton>
            </Grid>
            <Typography style={{fontSize: 20, marginTop:"25px"}}>{message}</Typography>
            <Follow/>
        </Grid>
        <RelatedArticle/>
    </div>
  );
}