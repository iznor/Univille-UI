import React from 'react';
import { UnivilleRouter } from './routes';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { themeConfig } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import * as ReactDOMClient from 'react-dom/client';
import { Loader, MessageDialog } from './components';
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ThemeProvider theme={themeConfig(false)}>
          <Loader />
          <MessageDialog />
          <UnivilleRouter />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
