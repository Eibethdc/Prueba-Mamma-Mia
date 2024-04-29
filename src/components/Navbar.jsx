import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'desactive')

    return (
        <Navbar className="bg-body-tertiary bg-info">
        <Container>
            <Nav className="me-auto">
                <NavLink className={ setActiveClass } style={{textDecoration: 'none'}} to='/' >🍕 Pizzería Mamma Mía!</NavLink>
            </Nav>
            <Nav>
                <NavLink className={ setActiveClass } style={{textDecoration: 'none'}} to='/carrito'>🛒Compras</NavLink>
            </Nav>
        </Container>
        </Navbar>
    )
}

export default NavBar
