import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/Home';
import AnswerPage from './components/AnswerPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Link to="/" />
          <Link to="/page2" />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={AnswerPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
