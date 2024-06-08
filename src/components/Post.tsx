import React, { useState, useEffect } from "react";
import LikeCount from "./LikeCount";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

// const FeedPost = ({ post }) => {
//   const [likes, setLikes] = useState(post.likes);

//   useEffect(() => {
//     // Here you can fetch the updated post data from your API
//     // For example:
//     fetch(`http://127.0.0.1:3001/posts/${post.post_id}`)
//       .then((response) => response.json())
//       .then((updatedPost) => {
//         setLikes(updatedPost.likes);
//       });
//   }, [post.likes]);
//   // fetch(`api/posts/${post.post_id}`)
//   // setPostState({
//   //   ...postState,
//   //   likes: postState,
//   // });

//   // For now, we'll just simulate an update with setTimeout
//   // setTimeout(() => {
//   //   setPostState({
//   //     ...postState,
//   //     likes: postState.likes,
//   //   });
//   // }, 5000); // update every 5 seconds
//   // }, [postState]);

//   return (
//     <div style={styles.postContainer}>
//       <p style={styles.content}>{postState.content}</p>
//       <p style={styles.meta}>
//         Posted by User {postState.user_id} at{" "}
//         {new Date(postState.created_at).toLocaleString()}
//         the post_id is {postState.post_id}
//       </p>
//       <LikeButton post_id={postState.post_id} />
//       <DislikeButton post_id={postState.post_id} />
//       <LikeCount post_id={postState.post_id} count={postState.likes} />
//     </div>
//   );
// };
const Post = ({ post }: PostProps) => {
  const [updatedPost, setPost] = useState(post);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the updated post data from your API
    fetch(`http://127.0.0.1:3001/posts/${post.post_id}`)
      .then((response) => response.json())
      .then((post) => {
        // Update the post state with the updated post data
        setPost((prevPost) => ({ ...prevPost, ...post }));
      });
  }, [post.likes]);

  useEffect(() => {
    // Fetch the user data from your API
    fetch(`http://127.0.0.1:3001/username/${post.user_id}`)
      .then((response) => response.json())
      .then((username) => {
        // Update the username state with the username property of the user data
        console.log("data.username ", data.username);
        setUsername(username);
      });
  }, []); // Empty dependency array means this effect runs once on mount and not on updates

  // Render the post
  return (
    <div style={styles.postContainer}>
      <p style={styles.content}>{updatedPost.content}</p>
      <p style={styles.meta}>
        Posted by {username} at{" "}
        {new Date(updatedPost.created_at).toLocaleString()}
        the post_id is {updatedPost.post_id}
      </p>
      <LikeButton post_id={updatedPost.post_id} />
      <DislikeButton post_id={updatedPost.post_id} />
      <LikeCount count={updatedPost.likes} />
    </div>
  );
};

// const FeedPost = ({ post }) => {
//   return (
//     <div style={styles.postContainer}>
//       <p style={styles.content}>{post.content}</p>
//       <p style={styles.meta}>
//         Posted by User {post.user_id} at{" "}
//         {new Date(post.created_at).toLocaleString()}
//         the post_id is {post.post_id}
//       </p>
//       <LikeButton post_id={post.post_id} />
//       <DislikeButton post_id={post.post_id} />
//       <LikeCount count={post.likes} />
//     </div>
//   );
// };

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

export default Post;
