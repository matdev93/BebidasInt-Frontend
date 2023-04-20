import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar variant='light' expand='lg'>
        <Navbar.Brand href='/'>
          {/* <img
                        src={lazo}
                        width="200"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo"
                        /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to='/'>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to='/products'>
              Productos
            </Nav.Link>
            <Nav.Link as={NavLink} to='/auth'>
              Login
            </Nav.Link>

            <NavDropdown title='Admin'>
              <NavDropdown.Item as={NavLink} to='/admin/users'>
                Users
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
