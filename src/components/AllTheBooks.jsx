import { Component } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import fantasy from "../books/fantasy.json";

class AlltheBooks extends Component {
  render() {
    return (
      <Container className="mt-3 bg-dark">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
          {fantasy.map(book => (
            <Col key={book.asin} className="mb-4">
              <Card className="bg-secondary">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className="lead">
                    {" "}
                    <strong>Category:</strong> {book.category}
                  </Card.Text>
                  <p>
                    <Badge bg="dark">{book.price}€</Badge>
                  </p>
                  <Button variant="success">{this.props.buy}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AlltheBooks;
