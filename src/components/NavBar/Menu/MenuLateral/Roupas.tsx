import { useState } from 'react'
import { Box, ListItemButton, List, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import useDrawerMode from "../../../../hooks/useDrawerMode";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useThemeMode from '../../../../hooks/useThemeMode';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Roupas = () => {
  const { toggleDrawerOpen } = useDrawerMode()
  const { mode } = useThemeMode()

  const collapse = [
    { id: 1, name: 'Camisa' },
    { id: 2, name: 'Calça' },
    { id: 3, name: 'Saia' },
    { id: 4, name: 'Short' },
  ]

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClose = (e: string) => {
    setOpen(prev => !prev);
    toggleDrawerOpen()
  };


  return (
    <List
      component='nav'
      aria-labelledby="nested-list-subheader"
      disablePadding
      sx={{ mb: '2px', }}
    >
      <ListItemButton onClick={handleClick}>
        {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
        <ListItemText primary="Categorias" sx={{ flex: 'none', marginLeft: '10px' }} />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {collapse.map((e) => (
          <List key={e.id} component="nav" sx={{ pl: 5, pt: 0, pr: 0, pb: 0 }}>
            <ListItemButton sx={{ pl: 0, borderLeft: '1px solid' }} onClick={() => handleClose(e.name)}>
              <ListItemText primary={e.name} sx={{ marginY: 0, marginLeft: 3 }} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>

    </List>
  );
}

export default Roupas;