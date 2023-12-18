import * as React from 'react';
import { IMaskInput } from 'react-imask';
import FormControl from '@mui/material/FormControl';
import { InputRegisterProps } from '../../../../../../interfaces/interfaces';
import { OutlinedInput, InputLabel, FormHelperText } from '@mui/material';
import useThemeMode from '../../../../../../hooks/useThemeMode';
import { tokens } from '../../../../../../themes/theme';
import { colors } from '@mui/material';

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
      <FormControl variant="outlined">
        <InputLabel htmlFor="phone" sx={{ color: colors.grey[100] }}>Numero de telefone:</InputLabel>
        <OutlinedInput
          label='Numero de telefone:'
          inputComponent={TextMaskCustom as any}
          {...register('phone', { required: true })}
          error={errors?.phone?.type == 'required'}
        />
        <FormHelperText id="my-helper-text" error={errors?.phone?.type === 'required'}>
          {errors?.phone?.type == 'required' && 'Preencha seu telefone'}
        </FormHelperText>
      </FormControl>
    </>
  );
}