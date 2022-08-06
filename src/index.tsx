import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
