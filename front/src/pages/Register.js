import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

export default function Register(){
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="sm">
      <IconButton href="/"><CloseIcon /></IconButton>
      <Box my={5} align="center">
        <Typography variant="h4" gutterBottom>Join EASY!</Typography>
        <Typography variant="p" gutterBottom>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</Typography>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your username" fullWidth/></Box>
        <Box p={1} m={1}><TextField id="standard-basic" label="Your email" fullWidth/></Box>
        <Box p={1} m={1}>
          <FormControl className={clsx(classes.margin, classes.textField)}>
            <InputLabel htmlFor="standard-adornment-password">Your Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box p={1} m={1}><Button variant="contained" color="primary" href="#" fullWidth>Registration</Button></Box>
        <Typography variant="p" gutterBottom>To make EASY! work, we log user data and share it with service providers. Click “Sign Up” above to accept EASY! <Link color="primary" href="#">Terms of Service</Link> & <Link color="primary" href="#">Privacy Policy</Link>.</Typography>     
      </Box>
    </Container>
  );
}