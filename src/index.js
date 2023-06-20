import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content


// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(<App/>);