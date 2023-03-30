import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBooks extends Component {
  render() {
    return (
      <Card>
        <Card.Img variant="top" src={this.props.img} style={{ height: "500px" }} />
        <Card.Body>
          <Card.Title className="text-truncate">{this.props.title}</Card.Title>
          <Button variant="primary">€{this.props.price}</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBooks;
