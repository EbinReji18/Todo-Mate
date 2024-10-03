import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
          <i className="fa-solid fa-calendar-check px-2" style={{color: "#a73939",}} />{' '}
            Todo Mate
          </Link>
          </Navbar.Brand>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header