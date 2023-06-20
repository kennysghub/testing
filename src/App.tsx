import React from 'react';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div data-testid="app-div">
      Hello, this is a simple React App with TypeScript!
      <Home />
    </div>
  );
};

export default App;
