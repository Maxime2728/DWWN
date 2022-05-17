import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import {MdLocalOffer} from 'react-icons/md';

const TopBar = () => {
  return (
    <>
    <Navbar bg="dark" variant='dark' expand="lg">
        <Container fluid>
            <h6 className='text-light'>
                <MdLocalOffer className='text-warning'/>
                Livraison gratuite à domicile pour toutes commande supérieur à 50€
                </h6>
            <Nav className="ms-auto">
                <LinkContainer to="/" activeClassName>
                    <Nav.Link>Acceuil</Nav.Link>
                </LinkContainer>
                <LinkContainer to="about" activeClassName>
                    <Nav.Link>A propos</Nav.Link>
                </LinkContainer>
                <LinkContainer to="contact" activeClassName>
                    <Nav.Link>Nous Contacter</Nav.Link>
                </LinkContainer>
                <LinkContainer to="Policy" activeClassName>
                    <Nav.Link>CGV</Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default TopBar