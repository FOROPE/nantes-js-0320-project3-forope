import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/Home';
import AnswerPage from './components/AnswerPage';
import ClientList from './components/ClientList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Link to="/" />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2" component={AnswerPage} />
          <Route path="/client" component={ClientList} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
