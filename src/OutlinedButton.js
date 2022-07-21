import React from 'react';

import Button from '@mui/material/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';

export default function OutlinedButtons({
  onClick,
}) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00700'
      }
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Button onClick={onClick} variant="outlined" color="primary">
        Logout
      </Button>
      
    </ThemeProvider>
  );
}
