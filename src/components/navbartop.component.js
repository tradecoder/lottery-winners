import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


export default function NavbarTop(){

    return (       
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Lottery Winners</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
            </Nav>        
      </Navbar>     
    )
}