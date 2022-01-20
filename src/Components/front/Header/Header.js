import React from 'react'
import {NavLink} from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        
<Navbar bg="#fffff" expand="lg" sticky='top'>
  <Container>
    <Navbar.Brand href="#home">
    <NavLink to={`/logo`}><img className="navbar-brand" src='./images/Cartel-Logo.png'/></NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home" ><NavLink  to={`/`} className="navlinks"> Home </NavLink></Nav.Link>
        
       <Nav.Link href="#courses"><NavLink to={'/courses'} className="dropdown">Courses
           <div className='dropdown-content'>
             <Nav.Link href="#"><NavLink to={'/cisco'} className="dropdown">cisco</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/microsoft'} className="dropdown">Microsoft</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/oracle'} className="dropdown">Oracle</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/red hat'} className="dropdown">Red Hat</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/vmware'} className="dropdown">VM ware</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/apple'} className="dropdown">Apple</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/security'} className="dropdown">Security</NavLink></Nav.Link>
             <Nav.Link href="#"><NavLink to={'/other'} className="dropdown">Other Technologies</NavLink></Nav.Link>
           </div>
       </NavLink>
       </Nav.Link>
         
       
        <Nav.Link href="#link"><NavLink to={`/training`} className="dropdown">Training Methodology</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to={`/it`} className="dropdown">Managed It Services</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to={`/clients`} className="dropdown">Our Clients</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to={`/about`} className="dropdown">About us</NavLink></Nav.Link>
        <Nav.Link href="#link"><NavLink to={`/contact`} className="dropdown">Contact us</NavLink></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
export default Header