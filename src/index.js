import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'; // Upewnij się, że ścieżka jest prawidłowa
import './index.css';

// Utwórz korzeń aplikacji
const root = createRoot(document.getElementById('root'));

// Renderuj komponent App w korzeniu
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
