import { Box, CssBaseline, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import menuLinks from '../../types/routes';

export default function Navigation() {
  return (
    <Box sx={{ display: 'inline-block', width: '100%' }}>
      <CssBaseline />
      <List>
        {menuLinks.map(({ to, label, id }) => (
          <ListItem button component={RouterLink} to={to} key={id}>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
