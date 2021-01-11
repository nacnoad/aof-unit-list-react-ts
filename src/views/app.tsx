import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import { Box, makeStyles } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import Detail from './pages/detail/Detail';
import NotFound from './pages/notFound/NotFound';
import { Provider } from 'react-redux';
import { store } from '../storage/store';

const Nav = styled(Box)`
  *:not(:first-child) {
    padding-left: 8px;
  }
`;

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    line-height: 1.44;
  }
  a{
    text-decoration:none;
  }
  ul{
    list-style: none;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    font-size:16px;
    font-family: 'Poppins', sans-serif;
  }
`;

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Nav
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
            margin="0"
            bgcolor="aqua"
            height="40px"
          >
            <Link data-testid="home" to="/">
              Home
            </Link>
            <Link to="/list">Units</Link>
          </Nav>
          <Box>
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/list'} exact component={List} />
              <Route path={'/details/:unitId'} exact component={Detail} />
              <Route component={NotFound} />
            </Switch>
          </Box>
        </Router>
      </Provider>
    </>
  );
};

export default App;
