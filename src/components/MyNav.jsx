import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = props => (
  <>
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">EpiBooks!🛒</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">{props.home}</Nav.Link>
          <Nav.Link href="#">{props.about}</Nav.Link>
          <Nav.Link href="#">{props.browse}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default MyNav;
