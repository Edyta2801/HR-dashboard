import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import { StyledEngineProvider } from '@mui/material/styles';
import '@fontsource/roboto';
import { AppProviders } from 'appProviders/AppProviders';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
// const container = document.getElementById('app');
// import App from './App';
// import { createRoot } from 'react-dom/client';

// const root = createRoot(container!);

root.render(
  <AppProviders>
    <BrowserRouter>
      {/* <StyledEngineProvider> */}
      <App />
      {/* </StyledEngineProvider> */}
    </BrowserRouter>
  </AppProviders>,
  // createRoot(container),
  // document.getElementById('root'),
);
