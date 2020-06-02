import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : 'Aditya Saxena',
      headerLinks :  [
        { title: 'Home', path:'/'},
        { title: 'About', path:'/about'},
        { title: 'Tech-Stack', path:'/tech-stack'},
        { title: 'Contact', path:'/contact'},
      ],
      home : {
        title: 'Revere speed',
        subTitle: 'sometimes you have to run before you can walk -- Iron Man',
        text: 'Check my projects below'
      },
      about : {
        title : 'About me'       
      },
      contact: {
        title: 'Connect with me'
      }

    }
  }
  
  render() {
    return (
        <Router>
            <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>ADITYA SAXENA</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
                <Navbar.Collapse id="navbar-toggle">
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/tech-stack">Tech-Stack</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>
        </Router>
    );
  }
}

export default App;
