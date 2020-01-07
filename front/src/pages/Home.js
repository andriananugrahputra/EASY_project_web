import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBarHome from '../components/AppbarHome';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import axios from 'axios';

const message1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const message2 = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;
const message3 = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`;
const message4 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '100%', height: 'auto' },
  borderColor: 'text.primary',
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  image: {
    width: 128,
    height: 128,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    maxWidth: "100%",
    display: 'flex',
    margin: 7,
  },
  media: {
    height: 140,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    
  },
  content: {
    flex: '1 0 auto',
  },
  coverBody1: {
    width: 100,
    height: 100,
  },
  coverBody2: {
    width: 200,
    height: 100,
    display: 'flex',
  },
  paper: {
    maxWidth: "100%",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));
export default function Home() {
  const classes = useStyles();
    return (
      <div className={classes.root}>
        <div style={{width:"90%", margin:"auto"}}>
          <AppBarHome/>
        </div>
        <AppBar color="transparant" position="static" style={{width:"80%", margin:"auto", boxShadow: 'none'}}>
          <Grid container justify={"center"}>
            <Tabs textColor="primary" variant="scrollable" indicatorColor="primary" color="default" scrollButtons="auto" aria-label="scrollable auto tabs example">
              <Tab label="HOME" href="#"/>
              <Tab label="ONEZERO" href="/categories"/>
              <Tab label="ELEMENTAL" href="#"/>
              <Tab label="GEN" href="#"/>
              <Tab label="ZORA" href="#"/>
              <Tab label="FORGE" href="#"/>
              <Tab label="HUMAN PARTS" href="#"/>
              <Tab label="MARKER" href="#"/>
              <Tab label="LEVEL" href="#"/>
              <Tab label="HEATED" href="#"/>
              <Tab label="MODUS" href="#"/>
              <Tab label="MORE" href="#"/>
            </Tabs>
          </Grid>
        </AppBar>
        <Grid container style={{ whiteSpace: 'nowrap', width:"80%", margin:"auto", marginTop:"1%"}}>
          <Grid xs={4}>
            <Box style={{margin:"5%"}}>
              <CardMedia className={classes.media} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwD4-4WgjLKpCOKsQ5thvg1sqtbXBgW8_3S9Z-WkDVhGy-lmK2" title="Lorem Ipsum Title"/>
              <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>Lorem Ipsum</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" fontSize={12}>{message1}</Box>
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" fontWeight="fontWeightBold">The standard Lorem Ipsum passage</Box>
              </Typography>
              <Typography gutterBottom variant="body2" color="textSecondary" component="p" style={{textAlign:"right"}}>
                <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" fontSize={12}>
                  April 25
                  <Tooltip title="Read more...">
                    <IconButton><ImportContactsIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box>
              <Box style={{marginTop:"5%"}} display="flex" flexDirection="row" component="div" textOverflow="ellipsis" overflow="hidden">
                <Box style={{marginRight:"2%"}}>
                  <CardMedia className={classes.coverBody1} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvGhJOJy0UQC3mZ5iej2ef6fAiXHY9cFDLwhXEzPSFjj0Kw3k4"/>
                </Box>
                <Box>
                  <Typography style={{fontWeight:"fontWeightBold", fontSize:18}}>
                    10 Books That Changed My Life
                  </Typography>
                  <Typography color="textSecondary" style={{fontSize:12}}>
                    They Will Do Most, If Not All of the Follow
                  </Typography>
                  <Typography fontWeight="fontWeightMedium" color="textSecondary" style={{fontSize: 12}}>
                    Brooke Meredith in P.S. I Love You
                  </Typography>
                  <Typography color="textSecondary" style={{fontSize: 12, textAlign:"right"}}>
                    Nov 27
                    <Tooltip title="Read more...">
                      <IconButton><ImportContactsIcon/></IconButton>
                    </Tooltip>
                  </Typography>
                </Box>
              </Box>
              <Box style={{marginTop:"5%"}} display="flex" flexDirection="row" component="div" textOverflow="ellipsis" overflow="hidden">
                <Box style={{marginRight:"2%"}}>
                  <CardMedia className={classes.coverBody1} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHLVZLEr_W-jDiw48pAZfOJU9vUxzP4J-u3UlGMqdi2mzAnLDV"/>
                </Box>
                <Box>
                  <Typography style={{fontWeight:"fontWeightBold", fontSize:18}}>
                    10 Books That Changed My Life
                  </Typography>
                  <Typography color="textSecondary" style={{fontSize:12}}>
                    They Will Do Most, If Not All of the Follow
                  </Typography>
                  <Typography fontWeight="fontWeightMedium" color="textSecondary" style={{fontSize: 12}}>
                    Brooke Meredith in P.S. I Love You
                  </Typography>
                  <Typography color="textSecondary" style={{fontSize: 12, textAlign:"right"}}>
                    Nov 27
                    <Tooltip title="Read more...">
                      <IconButton><ImportContactsIcon/></IconButton>
                    </Tooltip>
                  </Typography>
                </Box>
              </Box>
              <Box style={{marginTop:"5%"}} display="flex" flexDirection="row" component="div" textOverflow="ellipsis" overflow="hidden" bgcolor="background.paper">
                <Box style={{marginRight:"2%"}}>
                  <CardMedia className={classes.coverBody1} image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHyDS4EixOuW5gQUxQcRS8fuU-CqA9wC3ma1fdko8olM8hsHdO"/>
              </Box>
              <Box>
                <Typography style={{fontWeight:"fontWeightBold", fontSize:18}}>
                  10 Books That Changed My Life
                </Typography>
                <Typography color="textSecondary" style={{fontSize:12}}>
                  They Will Do Most, If Not All of the Follow
                </Typography>
                <Typography fontWeight="fontWeightMedium" color="textSecondary" style={{fontSize: 12}}>
                  Brooke Meredith in P.S. I Love You
                </Typography>
                <Typography color="textSecondary" style={{fontSize: 12, textAlign:"right"}}>
                  Nov 27
                  <Tooltip title="Read more...">
                    <IconButton><ImportContactsIcon/></IconButton>
                  </Tooltip>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box style={{margin:"5%"}}>
            <CardMedia className={classes.media} image="https://miro.medium.com/max/2419/1*XkLjxDrEpaHmy68IL_edeQ.jpeg" title="Lorem Ipsum Title"/>
            <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 24}}>Fish Love</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" fontSize={12}>{message1}</Box>
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" fontWeight="fontWeightBold">Emma Lindsay</Box>
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p" style={{textAlign:"right"}}>
              <Box component="div" my={2} textOverflow="ellipsis" overflow="hidden" fontSize={12}>Mar 28
                <Tooltip title="Read more...">
                  <IconButton href="/article_detail"><ImportContactsIcon/></IconButton>
                </Tooltip>
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid xs={12} style={{width:"80%", margin:"auto", boxShadow: 'none', textAlign:"right"}}>
        <Tooltip title="SEE ALL FEATURED">
          <IconButton href="#"><ArrowForwardIosIcon/></IconButton>
        </Tooltip>
      </Grid>
      <Box display="flex" justifyContent="center" style={{width:"80%", margin:"auto", boxShadow: 'none'}}>
        <Box borderTop={1} {...defaultProps}>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <Card className={classes.card}>
                <CardContent className={classes.content, classes.details} style={{width:"100%", margin:"auto"}}>
                  <Typography variant="subtitle1">Lorem ipsum</Typography>
                  <Typography variant="h5">The standard Lorem Ipsum passage, used since the 1500s</Typography>
                  <Typography variant="body1">{message1}</Typography>
                  <Typography variant="button">Lorem ipsum dolor</Typography>
                  <Typography variant="body2">Lorem ipsum dolor</Typography>
                </CardContent>
                <Box>
                  <CardMedia className={classes.coverBody2} style={{marginTop:"50%"}}image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmDIDVrUyEtrSpW9XBAFalmaUSFxjz-HvrrSI71azMhH2jYy_N" title="Live from space album cover"/>
                  <Tooltip title="Read more...">
                    <IconButton><ImportContactsIcon/></IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Card>
              <Card className={classes.card}>
                <CardContent className={classes.content, classes.details} style={{width:"100%", margin:"auto"}}>
                  <Typography variant="subtitle1">Sed ut perspiciatis unde</Typography>
                  <Typography variant="h5">de Finibus Bonorum et Malorum</Typography>
                  <Typography variant="body1">{message2}</Typography>
                  <Typography variant="button">Section 1.10.32 of "de Finibus Bonorum et Malorum</Typography>
                  <Typography variant="body2">written by Cicero in 45 BC</Typography>
                </CardContent>
                <Box>
                  <CardMedia className={classes.coverBody2} style={{marginTop:"50%"}}image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQrjdkTzsbd2O-6wOLuXyFZxVBvN4kbY_R9JLFudlrCVui1GNV"/>
                  <Tooltip title="Read more...">
                    <IconButton><ImportContactsIcon/></IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Card>
              <Card className={classes.card}>
                <CardContent className={classes.content, classes.details} style={{width:"100%", margin:"auto"}}>
                  <Typography variant="subtitle1">At vero eos et accusamus</Typography>
                  <Typography variant="h5">de Finibus Bonorum et Malorum</Typography>
                  <Typography variant="body1">{message3}</Typography>
                  <Typography variant="button">Section 1.10.33 of "de Finibus Bonorum et Malorum"</Typography>
                  <Typography variant="body2">written by Cicero in 45 BC</Typography>
                </CardContent>
                <Box>
                  <CardMedia className={classes.coverBody2} style={{marginTop:"50%"}}image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCupJT5jAI-KGNtPz0JEciLh3zRx7Oj1w6lL3slkypdHsW41GV"/>
                  <Tooltip title="Read more...">
                    <IconButton><ImportContactsIcon/></IconButton>
                  </Tooltip>
                  <Tooltip title="Bookmark">
                    <IconButton><BookmarkBorderIcon/></IconButton>
                  </Tooltip>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Box borderBottom={1} {...defaultProps}>
                <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} >Popular on EASY!</Box></Typography>
              </Box>
              <Grid container spacing={3} direction="row" justify="flex-end" alignItems="flex-start">
                <Grid item xs={2} p={5}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>01</Box></Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >Scientists Are Contemplating a 1,000-Year Space Mission to Save Humanity</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >Corin Faife in OneZero</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Dec 5</Box></Typography>
                </Grid>
                <Grid item xs={2} p={5}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>02</Box></Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >My Son Wore a Dress for Picture Day, and It Reaffirmed My Faith in Humanity</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >Alex Richards in Apparently</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Nov 13</Box></Typography>
                </Grid>
                <Grid item xs={2} p={5}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>03</Box></Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >Do These Things Before Going to Bed and You’ll Wake up Energized for Tomorrow</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >Tim Denning in P.S. I Love You</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Nov 27</Box></Typography>
                </Grid>
                <Grid item xs={2} p={5}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={24} p={3}>04</Box></Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography component="p"><Box fontWeight="fontWeightBold" fontSize={17} >The Absurd Story Behind China’s Biggest Bank Robbery</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightMedium" fontSize={12} >David Gauvey Herbert in Marker</Box></Typography>
                  <Typography component="p"><Box fontWeight="fontWeightLight" fontSize={12} >Dec 4</Box></Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}