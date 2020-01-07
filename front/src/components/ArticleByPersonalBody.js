import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width:'95%',
    margin:'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ArticleByPersonalBody() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar src="https://miro.medium.com/fit/c/40/40/0*n0tPg6pG-9mFpDBF.jpg"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Emma Lindsay"
        subheader="Mar 14 · 12 min read"
      />
      <CardMedia
        className={classes.media}
        image="https://miro.medium.com/max/3331/1*jl8nwRSuHs59-dY_PZGd6w.jpeg"
        title="Paella dish"
      />
      <CardContent style={{width:"95%", margin:"auto"}}>
        <Typography variant="h4" color="black" component="p">
          Reflections on Neverland
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          How Michael Jackson’s sexual abuse of children sheds light on different kinds of sexual power discrepancies
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{width:"95%", margin:"auto"}}>
        <IconButton>
          <img src="https://cdn1.iconfinder.com/data/icons/hand-gestures-line-art/128/hand-clap-noise-ol-512.png" width="30"/>
        </IconButton>
        <Typography style={{fontSize:12}}>
          123
        </Typography>
        <IconButton aria-label="share">
          <BookmarkBorderIcon />
        </IconButton>
        <Typography style={{fontSize:12}}>
          19 responses
        </Typography>
      </CardActions>
    </Card>
  );
}