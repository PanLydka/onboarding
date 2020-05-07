import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
      <h1 className="paragraph"> Jak się <strong> nazywasz?</strong>  </h1> 
      <TextField id="outlined-basic" label="Imie" variant="outlined" autoComplete="off"/>
      <TextField id="outlined-basic" label="Nazisko" variant="outlined" autoComplete="off" />

    </form>
  );
}

export default Form;
