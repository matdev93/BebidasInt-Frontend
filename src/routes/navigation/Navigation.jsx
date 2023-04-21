import { Nav, Navbar, NavDropdown, Container, NavbarBrand,} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../../context/user/UserContext";
import CartContext from "../../context/cart/CartContext";


const Navigation = () => {
  const { infoUser, signOut, authStatus} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const { name } = infoUser;


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
              {authStatus ? <Button onClick={signOut} className="me-3">Logout</Button> : <Nav.Link className="me-3" as={NavLink} to="/auth">Login</Nav.Link>}
              <CartIcon />
              {isCartOpen && <CartDropdown />}
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
