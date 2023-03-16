import { useEffect, useState, useContext } from "react";
import CommentList from "./comment-list";
import classes from "./comments.module.css";
import NewComment from "./new-comment";
import NotificationContext from "../../../10-working-with-app-wide-state-react-context/store/notification-context";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [isFetchingComments, setIsFetchingComments] = useState(false);
  const [comments, setComments] = useState([]);

  const notificationCtx = useContext(NotificationContext);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data.comments);
          setIsFetchingComments(false);
        });
    }
  }, [showComments]);

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Sending Comment...",
      message: "Your comment is currently being stored into a database",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.message || "Something went wrong!!!!");
          });
        }
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your  comment was saved!",
          status: "success",
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: err.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
