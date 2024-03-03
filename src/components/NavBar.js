import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
 
  return (
    <Router>
      <Navbar expand="md" className= "scrolled">
        <Container>
          <Navbar.Brand href="/">
            <h1 style={{color:"white",fontFamily:"KaiTi",fontWeight:"bold",fontSize:"50px"}}>分布式非协作网络的可信访问和路径溯源方法研究</h1>
          </Navbar.Brand>
    
        </Container>
      </Navbar>
    </Router>
  )
}
