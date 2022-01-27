import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xd={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            defaultValue=''
            fullWidth
            label={label}
            required
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
