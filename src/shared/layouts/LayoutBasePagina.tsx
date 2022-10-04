/* eslint-disable linebreak-style */
import { Theme, Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBasePaginaProps{
    titulo: string;
    children?: ReactNode;
    barraDeFerramentas?: ReactNode;
}

export const LayoutBasePagina: React.FC<ILayoutBasePaginaProps> = ({ children, titulo }) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();
  
  return(
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box display='flex' alignItems='center' padding={1} height={theme.spacing(12)} gap={1}>
        {smDown && (
          <IconButton>
            <Icon onClick={toggleDrawerOpen}>menu</Icon>
          </IconButton>
        )}
        
        <Typography variant='h5'>
          {titulo}
        </Typography>
      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box>
  );
};