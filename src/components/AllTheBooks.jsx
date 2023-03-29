import { Component } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import books from "../books/fantasy.json";

class AlltheBooks extends Component {
  //   state = {
  //     selectedBooks: null,
  //   };

  render() {
    return (
      <Container className="mt-3 bg-dark">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
          {books.map(cover => (
            <Col key={cover.asin} className="mb-4">
              <Card className="bg-secondary">
                <Card.Img variant="top" src={cover.img} />
                <Card.Body>
                  <Card.Title>{cover.title}</Card.Title>
                  <Card.Text className="lead">
                    {" "}
                    <strong>Category:</strong> {cover.category}
                  </Card.Text>
                  <p>
                    <Badge bg="dark">{cover.price}€</Badge>
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
