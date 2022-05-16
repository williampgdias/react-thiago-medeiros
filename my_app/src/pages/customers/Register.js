import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  }
}))

const Register = () => {
  const classes = useStyles();

  return (
    <>
      <div className={ classes.wrapper }>
        <TextField label="Tell me your name" />
      </div>
      <div className={ classes.wrapper }>
        <TextField label="What do you do?" />
      </div>
      <div className={ classes.wrapper }>
        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </div>
    </>
  )
}

export default Register;