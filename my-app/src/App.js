import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechStackPage from './pages/TechStackPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title : 'Aditya Saxena',
      headerLinks :  [
        { title: 'Home', path:'/'},
        { title: 'About', path:'/about'},
        { title: 'TechStack', path:'/techstack'},
        { title: 'Contact', path:'/contact'},
      ],
      home : {
        title: 'Aditya Saxena',
        subTitle: 'sometimes you have to run before you can walk -- Iron Man',
        text: 'Check my projects below'
      },
      about : {
        title : 'About me'       
      },
      techstack : {
        title : 'TechStack'       
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
                    <Link className="nav-link" to="/techstack">TechStack</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
              <Route path="/techstack" render={() => <TechStackPage title={this.state.techstack.title} />} />
              <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
              <Footer/>

            </Container>
        </Router>
    );
  }
}

export default App;
