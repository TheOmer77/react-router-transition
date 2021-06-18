import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import './styles.css';

const routes = [
  { name: 'Home', path: '/', exact: true, Component: <Home /> },
  { name: 'About', path: '/about', exact: true, Component: <About /> },
  { name: 'Contact', path: '/contact', exact: true, Component: <Contact /> },
];

const App = () => {
  return (
    <Router>
      <>
        <Navbar bg='primary' variant='dark'>
          <NavbarBrand>React Router Transition Thingy</NavbarBrand>
          <Nav>
            {routes.map((route) => (
              <Nav.Link
                key={route.path}
                as={NavLink}
                to={route.path}
                activeClassName='active'
                exact
              >
                {route.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <Container className='container'>
          {routes.map(({ path, exact, Component }) => (
            <Route key={path} exact={exact} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames='page'
                  unmountOnExit
                >
                  <div className='page'>{Component}</div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Container>
      </>
    </Router>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
