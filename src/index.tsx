import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { StyledEngineProvider } from "@mui/material/styles";



ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);


