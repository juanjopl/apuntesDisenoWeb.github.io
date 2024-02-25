import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.webp';

function Menu() {
  return(
  <Navbar expand="lg" className="w-100" id='navBar'>
    <Navbar.Brand href="/">
      <img src={logo} alt="Logo" className='logo'/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" id='botonNav'/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto" id='opcionesNav'>
        <Nav.Link href="/" className='mr-2'>Inicio</Nav.Link>
        <Nav.Link href="/videos">Videos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
export default Menu;