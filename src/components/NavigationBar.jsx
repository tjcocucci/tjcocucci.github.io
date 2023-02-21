import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" title="Home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" title="About">
              About
            </Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <Nav.Link as={Link} to="/about" title="About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/about" title="About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/about" title="About">
                About
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
