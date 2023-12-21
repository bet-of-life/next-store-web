import * as React from 'react';
import { IMaskInput } from 'react-imask';
import { InputRegisterProps } from '../../../../../../interfaces/interfaces';
import { TextField } from '@mui/material';
import useThemeMode from '../../../../../../hooks/useThemeMode';
import { tokens } from '../../../../../../themes/theme';
import { colors } from '@mui/material';
import { validateCPF } from '../../../../../../utils/validateCpf';

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
        mask="000.000.000-00"
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

export default function CpfInputRegister({ register, errors }: InputRegisterProps) {
  const { mode } = useThemeMode();
  const colors = tokens(mode);

  return (
    <>
      <TextField
        label='CPF:'
        variant='outlined'
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        InputProps={{ inputComponent: TextMaskCustom as any }}
        {...register('cpf', { required: true, validate: (value) => validateCPF(value) })}
        error={errors?.cpf?.type === 'required' || errors?.cpf?.type === 'validate'}
        helperText={
          errors?.cpf?.type === 'required' && 'Preencha seu cpf' ||
          errors?.cpf?.type === 'validate' && 'Preencha um CPF válido'
        }
      />
    </>
  );
}