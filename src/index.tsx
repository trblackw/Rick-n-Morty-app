import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

render(
   <StoreProvider>
      <App />
   </StoreProvider>,
   document.getElementById('root')
);
