import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { TextField, colors } from "@mui/material";
import { InputAdressProps } from "../../../../interfaces/interfaces";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="0000000"
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

const HouseNumberInput = ({ register, errors }: InputAdressProps) => {
  const { mode } = useThemeMode();
  const colors = tokens(mode)

  return (
    <TextField
      label="Número:"
      variant='outlined'
      InputLabelProps={{ style: { color: colors.grey[100] } }}
      InputProps={{ inputComponent: TextMaskCustom as any }}
      fullWidth
      {...register('houseNumber', { required: true })}
      error={errors?.houseNumber?.type == 'required'}
      helperText={errors?.houseNumber?.type === 'required' && 'Por favor, informe o número da residência!'}
    />
  );
}

export default HouseNumberInput;