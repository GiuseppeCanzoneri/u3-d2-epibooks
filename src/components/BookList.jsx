import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import SingleBooks from "./SingleBook";

class BookList extends Component {
  state = {
    libri: [...fantasy, ...horror, ...romance],
  };

  render() {
    const { libri } = this.state;

    return (
      <Container className="mt-3 bg-dark">
        <Row xs={1} sm={1} md={2} lg={3} className="p-5">
          {libri.map(book => (
            <Col key={`book-${book.category}-${book.asin}`} className="p-3">
              <SingleBooks img={book.img} title={book.title} price={book.price} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
