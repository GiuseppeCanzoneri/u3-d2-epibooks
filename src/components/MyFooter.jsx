import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer className="mt-5">
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
