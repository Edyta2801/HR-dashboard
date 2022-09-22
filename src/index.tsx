import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import '@fontsource/roboto';
import { AppProviders } from 'appProviders/AppProviders';
import App from './App';

ReactDOM.render(
  <AppProviders>
    <BrowserRouter>
      {/* <StyledEngineProvider> */}
      <App />
      {/* </StyledEngineProvider> */}
    </BrowserRouter>
  </AppProviders>,
  document.getElementById('root'),
);
