import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      },
    },
  },
}))(MenuItem);

export default function MenuProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const preventDefault = event => event.preventDefault();

  return (
    <div>
      <IconButton onClick={handleClick}>
        <PersonOutlineIcon/>
      </IconButton>
      <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <Typography>
          <Grid container style={{marginLeft:15, marginTop:25, marginBottom:25, marginRight:10}}>
            <Grid xs={3}>
              <Avatar style={{height:40, width:40}}alt="Remy Sharp" src="https://miro.medium.com/fit/c/40/40/0*N-COS3Rl-CdTwAEd"/>
            </Grid>
            <Grid xs={9}>
              <Tooltip title="Go to the profil">
                <Link href="/profile" color="inherit" style={{textDecoration:"none"}}>
                  <Typography style={{marginRight:30, fontSize:12}}>Andrian Anugrah Putra</Typography>
                </Link>
              </Tooltip>
              <Tooltip title="Go to the profil">
                <Link href="/profile" color="inherit" style={{textDecoration:"none"}}>
                  <Typography style={{marginRight:30, fontSize:12}}>@andriananugrah.putra@gmail.com</Typography>
                </Link>
              </Tooltip>          
            </Grid>
          </Grid>
          <Grid container style={{marginLeft:15, marginTop:25, marginBottom:25, marginRight:10}}>
            <Typography style={{color:"#1F9C7B", fontSize:12}}>Become a member</Typography>
          </Grid>
        </Typography>
        <StyledMenuItem>
          <Link href="/new_story" color="inherit" style={{textDecoration:"none"}}>
            <Typography>New Story</Typography>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="/story" color="inherit" style={{textDecoration:"none"}}>
            <Typography>Stories</Typography>
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography>Series</Typography>
        </StyledMenuItem>
        <Link href="/stats" color="inherit" style={{textDecoration:"none"}}>
          <StyledMenuItem><Typography>Stats</Typography></StyledMenuItem>
        </Link>
        <StyledMenuItem>
          <Typography>Medium Partner Program</Typography>
        </StyledMenuItem>
        <Link href="/bookmarks" color="inherit" style={{textDecoration:"none"}}>
          <StyledMenuItem><Typography>Bookmarks</Typography></StyledMenuItem>
        </Link>
        <StyledMenuItem>
          <Typography>Publications</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography>Customize your interests</Typography>
        </StyledMenuItem>
        <Link href="/profile" color="inherit" style={{textDecoration:"none"}}>
          <StyledMenuItem><Typography>Profile</Typography></StyledMenuItem>
        </Link>      
        <StyledMenuItem>
          <Typography>Settings</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography>Help</Typography>
        </StyledMenuItem>
        <StyledMenuItem>
          <Typography>Sign out</Typography>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}