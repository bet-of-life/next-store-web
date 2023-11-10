import { useState } from 'react'
import { Box, ListItemButton, List, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import useDrawerMode from "../../../../hooks/useDrawerMode";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import useThemeMode from '../../../../hooks/useThemeMode';

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
    console.log(e)
  };


  return (
    <List
      component='nav'
      aria-labelledby="nested-list-subheader"
      sx={{
        borderRadius: 2,
        bgcolor: mode === 'light' ? 'secondary.main' : 'primary.dark',
        mb: '2px',
        padding: '5px',
      }}>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CheckroomIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        {collapse.map((e) => (
          <List key={e.id} component="nav" disablePadding sx={{ borderBottom: '1px solid' }}>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleClose(e.name)}>
              <ListItemIcon>
                {/* <StarBorder /> */}
              </ListItemIcon>
              <ListItemText primary={e.name} />
            </ListItemButton>
          </List>
        ))}
      </Collapse>

    </List>
  );
}

export default Roupas;