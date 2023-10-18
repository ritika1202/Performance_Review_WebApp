// import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from 'react-bootstrap';
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './SideBar.css'


function SideBar() {

  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  const navigate = useNavigate();
  
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    navigate(path);
  }
  

  return (
    <>
      <Nav  className="col-md-12 sideBar" style={{ height : "100vh", backgroundColor : "#262b40" }}>
          <Container className="text-center">
            <Navbar.Brand className="d-block mt-3 text-white p-2" style={{ fontSize : "xx-large" }} href="#home">Tracker</Navbar.Brand>
            <Nav.Item className="p-2">
                <Nav.Link 
                // onClick={() => onSetActiveMenuItem('dashboard')} 
                onClick={() => routeChange("/dashboard")}
                // href="/dashboard"
                className={`text-white sideBarTab ${splitLocation[1] === 'dashboard' ? 'active' : 'inactive'}`}
                >Dashboard</Nav.Link>
            </Nav.Item>
          </Container>
      </Nav>
    </>);
}

export default SideBar;