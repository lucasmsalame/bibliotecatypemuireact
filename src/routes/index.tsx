/* eslint-disable linebreak-style */
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import {  useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      },
    ]);
  },[]);
  return(
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>}/>
      
      <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
    </Routes>
  );
};