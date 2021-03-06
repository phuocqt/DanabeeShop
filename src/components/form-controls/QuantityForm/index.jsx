import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, FormControl, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

QuantityForm.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function QuantityForm(props) {
  const { form, name, disable } = props;
  const { control, setValue } = form;

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <Box>
          <Typography pl={5}>Quantity</Typography>
          <FormControl
            margin="normal"
            variant="outlined"
            fullWidth
            error={invalid}
            helperText={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            value={value}
            disabled={disable}
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <RemoveIcon
              sx={{ paddingRight: '10px' }}
              onClick={() => {
                setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
              }}
            />

            <TextField size="small" value={value} id={name} sx={{ maxWidth: '150px' }} />
            <AddIcon
              sx={{ paddingLeft: '10px' }}
              onClick={() => {
                setValue(name, Number.parseInt(value) + 1);
              }}
            />

            <FormHelperText error={error}>{error?.message}</FormHelperText>
          </FormControl>
        </Box>
      )}
    ></Controller>
  );
}

export default QuantityForm;
