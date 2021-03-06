// import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";

const AddressInput = ({ required, name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            fullWidth
            value={value}
            label={label}
            required={required}
          />
        )}
      />
    </Grid>
  );
};

export default AddressInput;
