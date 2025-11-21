// src/components/Home.jsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
     
      <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "green" }}>
        <Container>
          <Navbar.Brand>
            <Link to='/' style={{ color: 'white', textDecoration: "none", fontFamily: "monospace", fontSize: "30px", fontWeight: "bold" }}>
              Book World
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none" }}>User</Link>
              <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Seller</Link>
              <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Admin</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     
      <img
        src="https://png.pngtree.com/thumb_back/fw800/background/20241017/pngtree-an-open-book-with-a-map-of-the-world-displaying-image_16408844.jpg"
        alt="Book World Banner"
        style={{
          width: "100%",
          height: "88vh",      
          objectFit: "cover",
          marginTop: "0"
        }}
      />
    </div>
  );
};

export default Home;
