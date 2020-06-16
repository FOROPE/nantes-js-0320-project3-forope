import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import Home from './components/home';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
