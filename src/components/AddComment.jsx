import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = props => {
  const [commentObj, setCommentObj] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin,
  });

  useEffect(() => {
    setCommentObj({ ...commentObj, elementId: props.asin });
  }, [props.asin]);

  const sendComment = async e => {
    e.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(commentObj), //{comment:comment, rate:rate, elementId:props.asin}
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMTdhMjBlNzg3MDAwMTRkODkyYzIiLCJpYXQiOjE2ODA2MTEyMzQsImV4cCI6MTY4MTgyMDgzNH0.GKCnizkHALHCKqoWniiQ-M17oToSmtg5tDSIqKW1AHU",
        },
      });
      if (response.ok) {
        // alert("Commento inviato");

        // ricrea la lista di commenti nel livello superiore (il padre: CommentArea)
        // attraverso la referenza della funzione fetchComments passata come prop a questo componente
        props.fetchComments();

        // resetta i campi (svuotarli)
        setCommentObj({
          comment: "",
          rate: "1",
          elementId: props.asin,
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleCommentChange = e => {
    setCommentObj({ ...commentObj, comment: e.target.value });
  };

  const handleRateChange = e => {
    setCommentObj({ ...commentObj, rate: e.target.value });
  };

  return (
    <Form onSubmit={sendComment}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="text"
          placeholder="Inserisci il commento"
          value={commentObj.comment}
          onChange={handleCommentChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rate">
        <Form.Label>Voto</Form.Label>
        <Form.Select value={commentObj.rate} onChange={handleRateChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary">
        Invia commento
      </Button>
    </Form>
  );
};

export default AddComment;
