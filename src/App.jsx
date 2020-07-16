import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/Home';
import AnswerPage from './components/AnswerPage';
import ClientList from './components/BackOffice/ClientList';
import LoginBO from './components/BackOffice/LoginBO';
import DashboardBO from './components/BackOffice/DashboardBO';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Link to="/" />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:interlocutor/:theme" component={AnswerPage} />
          <Route path="/contact" component={Contact} />
          <Route path="/client" component={ClientList} />
          <Route path="/back-office" component={LoginBO} />
          <Route path="/dashboard" component={DashboardBO} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
