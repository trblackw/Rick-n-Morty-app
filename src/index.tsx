import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { StoreProvider } from './Store';

render(
   <StoreProvider>
      <App />
   </StoreProvider>,
   document.getElementById('root')
);
