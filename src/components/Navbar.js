import "../styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar className="Navbar" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="mr-auto brand-logo">
          {" "}
          <span className="todo-brand-name">TODO</span>
          <span className="box-brand-name">-BOX 📦</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="item-list">Home</Nav.Link>
            <Nav.Link href="/todolist" className="item-list">Todolist</Nav.Link>
            <Nav.Link href="/about" className="item-list">About</Nav.Link>
            <Nav.Link href="/developer" className="item-list">Developer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
