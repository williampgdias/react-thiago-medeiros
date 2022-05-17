import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { TextField, Button, AccordionSummary } from '@material-ui/core';

import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  }
}))

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [form,setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  })

  const [openToasty, setOpenToasty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${ id }`)
      .then(response => {
        const { data } = response.data
        setForm({
          name: {
            value: data.first_name,
            error: false,
          },
          job: {
            value: data.job,
            error: false,
          },
        })
      })
  }, []);

  

  console.log(form);


  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () => {
    setIsLoading(true);

    let hasError = false;
    let newFormState = {
      ...form,
    }
    if (!form.name.value) {
      hasError = true;

      newFormState.name = {
        value: form.name.value,
        error:true,
        helperText: 'Incorrectly entry',
      };
    }
    if (!form.job.value) {
      hasError = true;

      newFormState.job = {
        value: form.job.value,
        error:true,
        helperText: 'Incorrectly entry',
      };
    }

    if(hasError) {
      return setForm(newFormState);
    }

    axios.post(`https://reqres.in/api/users/${ id }`, {
      name: form.name.value,
      job: form.job.value,
    }).then((response) => {
      setOpenToasty(true);
      setIsLoading(false);
    })
  }

  return (
    <>
      <div className={ classes.wrapper }>
        <TextField
          error={ form.name.error }
          helperText={ form.name.error ? form.name.helperText : '' }
          label="Tell me your name" 
          name="name" 
          value={ form.name.value } 
          onChange={ handleInputChange} />
      </div>
      <div className={ classes.wrapper }>
        <TextField
        error={ form.job.error }
        helperText={ form.job.error ? form.job.helperText : '' } 
        label="What do you do?"
        name="job"
        value={ form.job.value }
        onChange={ handleInputChange} />
      </div>
      <div className={ classes.wrapper }>
        <Button variant="contained" color="primary" onClick={ handleRegisterButton } disabled={ isLoading }>
          {
            isLoading ? 'Loading...' : "Save"
          }
        </Button>
      </div>
      <Toasty 
        open={ openToasty }
        severity="success"
        text="Success Update"
        onClose={ () => setOpenToasty(false) }
      />
    </>
  )
}

export default Edit;