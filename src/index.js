import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import './assets/styles/variables.css';
import './assets/styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);



