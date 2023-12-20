import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { InputRegisterProps } from '../../../../../../interfaces/interfaces';
import { TextField } from '@mui/material';
import useThemeMode from '../../../../../../hooks/useThemeMode';
import { tokens } from '../../../../../../themes/theme';
import { colors } from '@mui/material';
import { validatePhoneNumber } from '../../../../../../utils/validatePhone';

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
        mask="(#0) 00000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

export default function FormattedInputs({ register, errors }: InputRegisterProps) {
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  return (
    <>
      <TextField
        label='Numero de telefone:'
        variant='outlined'
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        InputProps={{ inputComponent: TextMaskCustom as any }}
        {...register('phone', { required: true, validate: (value) => validatePhoneNumber(value) })}
        error={errors?.phone?.type === 'required' || errors?.phone?.type === 'validate'}
        helperText={
          errors?.phone?.type === 'required' && 'Preencha seu numero' ||
          errors?.phone?.type === 'validate' && 'Presncha um numero válido'
        }
      />
    </>
  );
}