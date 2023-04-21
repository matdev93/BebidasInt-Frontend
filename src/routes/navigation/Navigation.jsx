import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  NavbarBrand,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/user/UserContext';

const Navigation = () => {
  const { infoUser, signOut, authStatus } = useContext(UserContext);

  const { name } = infoUser;
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <NavbarBrand href='/'>Bebidas</NavbarBrand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={NavLink} to='/'>
                Inicio
              </Nav.Link>
              <Nav.Link as={NavLink} to='/catalogo'>
                Productos
              </Nav.Link>
              <NavDropdown title='Mi perfil'>
                <NavDropdown.Item as={NavLink} to='/user/profile'>
                  Mi Perfil
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/user/options'>
                  Opciones
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
