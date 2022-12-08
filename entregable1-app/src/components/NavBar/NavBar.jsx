import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Gorras</Nav.Link>
                <Nav.Link href="#pricing">Aletas</Nav.Link>
                <NavDropdown title="Personalizados" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Goggles personalizados</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Snorkel personalizados
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Tabla personalizada</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Pedido mayoreo
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
            <Navbar.Brand>
                <CartWidget />
              </Navbar.Brand>
          </Container>
        </Navbar>
    )
}

export default NavBar