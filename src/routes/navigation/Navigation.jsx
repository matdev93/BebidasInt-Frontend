import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  NavbarBrand,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>

      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <NavbarBrand as={NavLink} to='/'>Bebidas</NavbarBrand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/'>
                Inicio
              </Nav.Link>
            <Nav.Link as={NavLink} to='/products'>
              Productos
            </Nav.Link>
              <NavDropdown title='Admin'>
                <NavDropdown.Item as={NavLink} to='/admin/users'>
                  Users
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to='/auth'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
