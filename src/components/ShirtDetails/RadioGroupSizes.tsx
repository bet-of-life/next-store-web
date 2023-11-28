import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import useThemeMode from '../../hooks/useThemeMode';
import { tokens } from '../../themes/theme';
import { Typography } from '@mui/material';
import { useState } from 'react';

const RadioGroupSizes = () => {
  const [sizeSelect, setSizeSelect] = useState<string>('')

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <FormControl>
      <Typography color={colors.grey[100]} mb={1}>
        Tamanho: {sizeSelect}
      </Typography>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="P"
          control={<Radio sx={{ '&.Mui-checked': { color: colors.grey[100] } }} />}
          label="P"
          onClick={() => setSizeSelect('P')}
        />
        <FormControlLabel
          value="M"
          control={<Radio
            sx={{ '&.Mui-checked': { color: colors.grey[100] } }} />}
          label="M"
          onClick={() => setSizeSelect('M')}
        />
        <FormControlLabel
          value="G"
          control={<Radio sx={{ '&.Mui-checked': { color: colors.grey[100] } }} />}
          label="G"
          onClick={() => setSizeSelect('G')}
        />
        <FormControlLabel
          value="GG"
          control={<Radio sx={{ '&.Mui-checked': { color: colors.grey[100] } }} />}
          label="GG"
          onClick={() => setSizeSelect('GG')}
        />
        <FormControlLabel
          value="XG"
          control={<Radio sx={{ '&.Mui-checked': { color: colors.grey[100] } }} />}
          label="XG"
          onClick={() => setSizeSelect('XG')}
        />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioGroupSizes