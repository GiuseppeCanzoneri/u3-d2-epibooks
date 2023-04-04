import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = props => {
  const [comment, setComment] = useState({ comments: [] });

  // useEffect(() => {
  //   console.log("componentDidMount()");
  // // }, []);

  // useEffect(() => {
  //   console.log("componentDidupdate");
  // }, [comment]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMTdhMjBlNzg3MDAwMTRkODkyYzIiLCJpYXQiOjE2ODA2MTEyMzQsImV4cCI6MTY4MTgyMDgzNH0.GKCnizkHALHCKqoWniiQ-M17oToSmtg5tDSIqKW1AHU",
        },
      });

      if (response.ok) {
        const commentsArr = await response.json();
        setComment({ comments: commentsArr });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [props.asin]);

  return (
    <div>
      <AddComment asin={props.asin} fetchComments={fetchComments} />
      <CommentsList comments={comment.comments} />
    </div>
  );
};

export default CommentArea;
