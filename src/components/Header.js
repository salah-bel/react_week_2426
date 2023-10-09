import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link to="/">
            <Navbar.Brand>React-App</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/help">
              Aide?
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contactez-nous
            </Nav.Link>

            <NavDropdown title="Produits" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/products">Liste des produits</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/new-product">Créer un produit</NavDropdown.Item>
                
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ToDo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
