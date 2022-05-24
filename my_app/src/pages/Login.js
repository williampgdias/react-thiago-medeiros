import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import { userHistory } from 'react-router-dom';
import useAuth from '../state/auth';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useAuth();

  const handleInputChange = e => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email,
      });

      history.push('/');
    }, 4000);
  };

  return (
    <>
      <Typography variant='h3'>Restrict Access</Typography>

      <div className={classes.wrapper}>
        <TextField
          onChange={handleInputChange}
          label='Write your e-mail'
          name='email'
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          onChange={handleInputChange}
          label='Choose a password'
          type='password'
          name='password'
        />
      </div>
      <div className={classes.wrapper}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleFormSubmit}
        >
          {isLoading ? 'Loading...' : 'Log In'}
        </Button>
      </div>
    </>
  );
};

export default Login;
