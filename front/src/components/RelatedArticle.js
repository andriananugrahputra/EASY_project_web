import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import CardMedia from '@material-ui/core/CardMedia';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 280,
  },
}));

export default function RelatedArticle() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container style={{width:"90%", margin:"auto"}}>
          <Grid xs={12}>
              <Box borderBottom={1} style={{borderColor :"#E5E5E5", marginBottom:"10px"}}>
                <Typography style={{marginTop:"25px", marginBottom:"5px"}}>More From EASY!</Typography>
              </Box>
          </Grid>
          <Grid xs={4}>
            <Box style={{margin:"5%"}}>
              <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:"2%"}}>
                <Box component="div" textOverflow="ellipsis" overflow="hidden" fontSize={12}>More from OneZero</Box>
              </Typography>
              <CardMedia className={classes.media} image="https://miro.medium.com/max/2560/1*cgpt5vV8TTnDb7WbQbLH9A.jpeg" title="Lorem Ipsum Title"/>
              <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>The Only Correct Holiday Gift Guide for Cats</Typography>
              <Box display="flex" flexDirection="row">
                <Box>
                  <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/96/96/0*n0tPg6pG-9mFpDBF.jpg" />
                </Box>
                <Box style={{marginLeft:10}}>
                  <Typography style={{fontSize:15}}>Rae Paoletta</Typography>
                  <Typography style={{fontSize:12}}>Dec 6 · 6 min read</Typography>
                </Box>
                <Box style={{margin:"auto"}}>
                  <Tooltip title="Clap">
                    <IconButton><img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-line-art/128/hand-clap-noise-ol-512.png" width="30"/><Typography style={{fontSize:12}}>123</Typography></IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </Tooltip>
                  <Tooltip title="Read more...">
                    <IconButton><ArrowForwardIosIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={4}>
          <Box style={{margin:"5%"}}>
              <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:"2%"}}>
                <Box component="div" textOverflow="ellipsis" overflow="hidden" fontSize={12}>More from OneZero</Box>
              </Typography>
              <CardMedia className={classes.media} image="https://miro.medium.com/max/4032/1*KprR-Fiz2GI2eHAQBmEOww.jpeg" title="Lorem Ipsum Title"/>
              <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>On Being Human, As Directed By Cats</Typography>
              <Box display="flex" flexDirection="row">
                <Box>
                  <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/48/48/0*zBByhvRqAv1t61bZ" />
                </Box>
                <Box style={{marginLeft:10}}>
                  <Typography style={{fontSize:15}}>Chryssy Moor</Typography>
                  <Typography style={{fontSize:12}}>Aug 20 · 4 min read</Typography>
                </Box>
                <Box style={{margin:"auto"}}>
                  <Tooltip title="Clap">
                    <IconButton><img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-line-art/128/hand-clap-noise-ol-512.png" width="30"/><Typography style={{fontSize:12}}>123</Typography></IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </Tooltip>
                  <Tooltip title="Read more...">
                    <IconButton><ArrowForwardIosIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={4}>
          <Box style={{margin:"5%"}}>
              <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:"2%"}}>
                <Box component="div" textOverflow="ellipsis" overflow="hidden" fontSize={12}>More from OneZero</Box>
              </Typography>
              <CardMedia className={classes.media} image="https://miro.medium.com/max/5472/1*YtXII1-D6-J0tqaPK6v-BA.jpeg" title="Lorem Ipsum Title"/>
              <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>If You Own Cats, You Might Have a Brain-Altering Parasite</Typography>
              <Box display="flex" flexDirection="row">
                <Box>
                  <Avatar alt="Remy Sharp" src="https://miro.medium.com/fit/c/48/48/1*a6p51j21-VM6aqFLZ8T_pQ.jpeg" />
                </Box>
                <Box style={{marginLeft:10}}>
                  <Typography style={{fontSize:15}}>Zulie Rane</Typography>
                  <Typography style={{fontSize:12}}>Sep 9 · 5 min read</Typography>
                </Box>
                <Box style={{margin:"auto"}}>
                  <Tooltip title="Clap">
                    <IconButton><img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-line-art/128/hand-clap-noise-ol-512.png" width="30"/><Typography style={{fontSize:12}}>123</Typography></IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </Tooltip>
                  <Tooltip title="Read more...">
                    <IconButton><ArrowForwardIosIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </Grid>
      </Grid>
      <Grid container style={{backgroundColor:"#191919", color:"#FAFAFA"}}>
        <Grid container style={{width:"90%", margin:"auto"}}>
            <Grid xs={4} style={{marginTop:"50px", marginBottom:"50px"}}>
                <Typography>Discover EASY!</Typography>
                <Typography>Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch</Typography>
            </Grid>
            <Grid xs={4} style={{marginTop:"50px", marginBottom:"50px"}}>
                <Typography>Make EASY! yours</Typography>
                <Typography>Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore</Typography>
            </Grid>
            <Grid xs={4} style={{marginTop:"50px", marginBottom:"50px"}}>
                <Typography>Become a member</Typography>
                <Typography>Get unlimited access to the best stories on EASY! — and support writers while you’re at it. Just $5/month. Upgrade</Typography> 
            </Grid>
            <Grid xs={12}>
                <Box borderTop={1} style={{borderColor :"#BAB091", marginBottom:"25px"}}/>          
            </Grid>
            <Grid xs={10} style={{marginBottom:"25px"}}>
                <Typography variant="h6" noWrap>
                    <Button href="home">
                        <img src="https://icon-library.net/images/e-icon/e-icon-29.jpg" height="30" width="30"/>EASY!
                    </Button>
                </Typography>
            </Grid>
            <Grid xs={2} style={{marginBottom:"25px"}}>
                <Typography>
                    <Button href="#">About</Button>
                    <Button href="#">Help</Button>
                    <Button href="#">Legal</Button>
                </Typography>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}