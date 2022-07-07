import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { StyledEngineProvider } from "@mui/material/styles";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
        <StyledEngineProvider>
          <App />
        </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);


