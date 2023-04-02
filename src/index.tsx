import React from 'react';
import ReactDOM from 'react-dom';
import { UnivilleRouter } from './routes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { themeConfig } from './theme';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
  <div>
    <BrowserRouter>
      <ThemeProvider theme={themeConfig(false)}>
        <UnivilleRouter />
      </ThemeProvider>
    </BrowserRouter>
  </div>
);
