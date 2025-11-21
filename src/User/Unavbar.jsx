// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom"

const Unavbar = () => {
  const get=localStorage.getItem('user')
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"green"}}>
      <Container>
        <Navbar.Brand ><Link to='/uhome' style={{color:'white',textDecoration:"none",fontFamily: "monospace", fontSize: "30px", fontWeight: "bold"}}>Book World</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <Link to="/uhome" style={{padding:"10px",color:"white",textDecoration:"none"}}>Home</Link>
            <Link to="/uproducts" style={{padding:"10px",color:"white",textDecoration:"none"}}>Books</Link>
            <Link to="/wishlist" style={{padding:"10px",color:"white",textDecoration:"none"}}>Wishlist</Link>
            <Link to="/myorders" style={{padding:"10px",color:"white",textDecoration:"none"}}>My orders</Link>
            <Link to="/" style={{paddingLeft:"10px",paddingTop:"10px",color:"white",textDecoration:"none"}}>Logout</Link>
            <button style={{color:"black",paddingTop:"4px", position:"relative", left:"40px",fontFamily: "monospace", fontSize: "30px", fontWeight: "bold", backgroundColor:"whitesmoke", borderRadius:"10px", padding:"5px 5px"}}>{JSON.parse(get).name} </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
