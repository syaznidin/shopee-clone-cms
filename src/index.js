import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 👈 make sure this file has the tailwind directives

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
