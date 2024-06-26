import React, { useState, useEffect } from "react";
import LikeCount from "./LikeCount";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
// import LikeButton from "./LikeButton";
// import DislikeButton from "./DislikeButton";

export interface PostProps {
  post: {
    post_id: number;
    content: string;
    username: string;
    likes: number;
    created_at: string;
  };
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [updatedPost, setPost] = useState(post);
  // const [username, setUsername] = useState(post.username);
  const [likes, setLikes] = useState(post.likes);
  const { contextUsername, setContextUsername } = useUser();
  // console.log(`post.tsx - post.username is ${post.username}`);

  // useEffect(() => {
  //   // Fetch the user data from your API
  //   fetch(`http://127.0.0.1:3001/username/${post.username}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Update the username state with the username property of the user data
  //       setUsername(data.username);
  //     });
  // }, []); // Empty dependency array means this effect runs once on mount and not on updates

  const handleLike = () => {
    setLikes(likes + 1);
    // console.log("like called");
    fetch(`http://127.0.0.1:3001/posts/${post.post_id}/like`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response was not ok");
        }
      })
      .then((data) => {
        if (!data.success) {
          console.error("Failed to like the post");
          setLikes(likes - 1); // revert the local state change
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLikes(likes - 1); // revert the local state change
      });
  };

  const handleDislike = () => {
    setLikes(likes - 1);
    fetch(`http://127.0.0.1:3001/posts/${post.post_id}/dislike`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Server response was not ok");
        }
      })
      .then((data) => {
        if (!data.success) {
          console.error("Failed to dislike the post");
          setLikes(likes + 1); // revert the local state change
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLikes(likes + 1); // revert the local state change
      });
  };

  const handleUserContext = (e) => {
    e.preventDefault();
    setContextUsername(updatedPost.username);
    console.log(
      `post.tsx - handleUserContext - usercontext is ${updatedPost.username}`
    );
  };
  // Render the post
  return (
    <div style={styles.postContainer}>
      <p style={styles.content}>{updatedPost.content}</p>
      {/* <p style={styles.meta}>
        Posted by {username} at{" "}
        {new Date(updatedPost.created_at).toLocaleString()}
      </p> */}
      <p style={styles.meta}>
        Posted by{" "}
        <Link
          to={`/posts/user/${updatedPost.username}`}
          onClick={handleUserContext}
        >
          {updatedPost.username}
        </Link>{" "}
        at {new Date(updatedPost.created_at).toLocaleString()}
      </p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <LikeCount count={likes} />
      {/* <LikeButton post_id={updatedPost.post_id} /> */}
      {/* <LikeButton post_id={updatedPost.post_id} setLikes={handleLike} /> */}
      {/* <DislikeButton post_id={updatedPost.post_id} /> */}
    </div>
  );
};

export const styles = {
  postContainer: {
    backgroundColor: "#fff",
    padding: "10px",
    borderBottom: "1px solid #e1e8ed",
  },
  content: {
    fontSize: "16px",
    color: "#14171a",
  },
  meta: {
    fontSize: "12px",
    color: "#657786",
  },
};

// export default Post;
