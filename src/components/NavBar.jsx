import { Container, Nav, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { BellFill } from "react-bootstrap-icons";
import { PersonFill } from "react-bootstrap-icons";
const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid className="mx-3">
      <img src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png" width="120px" />
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Tv Shows</Nav.Link>
        <Nav.Link href="#pricing">Movies</Nav.Link>
        <Nav.Link href="#features">Recently Added</Nav.Link>
        <Nav.Link href="#pricing">My List</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
        <Nav.Link href="#home">
          <Search />
        </Nav.Link>
        <Nav.Link href="#features">KIDS</Nav.Link>
        <Nav.Link href="#pricing">
          <BellFill />
        </Nav.Link>
        <Nav.Link href="#features">
          <PersonFill />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
