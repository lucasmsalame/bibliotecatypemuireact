/* eslint-disable linebreak-style */
import { createTheme } from '@mui/material';
import { blue, cyan, purple, red } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF', 
      paper: '#f7f6f3',
    }
  },
});
