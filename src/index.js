
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';


const rootElement = document.getElementById('root');

// Replace ReactDOM.render with createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
