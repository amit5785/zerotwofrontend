import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"


// This to initialise the ams-amplify authentication for our application
import { Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

