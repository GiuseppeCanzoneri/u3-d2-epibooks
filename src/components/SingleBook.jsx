import { Card } from "react-bootstrap";

const SingleBook = props => {
  const isSelected = props.selectedBook === props.book.asin;

  const handleCardClick = () => {
    props.changeSelectedBook(props.book.asin);
  };

  return (
    <>
      <Card
        onClick={handleCardClick}
        style={{
          border: isSelected ? "3px solid red" : "3px solid #ebebeb",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
