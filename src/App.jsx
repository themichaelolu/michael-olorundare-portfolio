// src/App.jsx

import React from 'react';
import Portfolio from './portfolio.jsx';
import './index.css' // Import your global CSS (which now includes Tailwind)

function App() {
  // This wrapper sets the global theme styles (font, background color, and text color)
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-200 selection:bg-primary/30 selection:text-primary">
      <Portfolio />
    </div>
  );
}

export default App;