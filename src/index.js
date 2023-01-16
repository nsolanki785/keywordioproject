import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import { Stack } from '@mui/system';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Stack sx={{width:'100%',height:'100vh'}} bgcolor={'rgb(231, 235, 240)'}>
    <App />
    </Stack>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
