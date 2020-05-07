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

const Form2 = () => {
  const classes = useStyles();

  return (
    <form  noValidate autoComplete="off">
        <h1 className="paragraph"> Gdzie <strong> mieszkasz?</strong>  </h1> 
   

      <FormControl variant="outlined" className={classes.formControl} autoComplete="off">
        <InputLabel htmlFor="outlined-age-native-simple">Country</InputLabel>
        <Select
          native
        //   value={state.age}
        //   onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
          autoComplete="off"
        >
          <option aria-label="None" value="" />
          <option value={10}>Poland</option>
          <option value={20}>Germany</option>
          <option value={30}>Sweden</option>
        </Select>
      </FormControl>


      <TextField id="outlined-basic" label="City" variant="outlined" />

      
    </form>
  );
}

export default Form2;
