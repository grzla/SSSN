import React, { useState, useContext, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { globalStyles } from "../styles/styles";
import CreatePost from "./CreatePost";
import Post from "./Post";
import axios from "axios";

const FeedContainer = () => {
  const [posts, setPosts] = useState([]);
  // const { username } = useContext(UserContext); // Destructure username from context
  const { username } = useUser();

  const fetchPosts = () => {
    let url = "http://localhost:3001/posts";
    console.log(`feedcontainer/username is ${username}`);
    if (username) {
      url += `?username=${username}`; // Assuming the backend supports filtering by username via query parameters
    }

    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  useEffect(fetchPosts, [username]); // Re-fetch posts if the username context changes

  return (
    <>
      <div style={styles.container}>
        <p style={styles.header}>See What's Happening!</p>
        <div style={styles.CreatePostContainer}>
          <CreatePost onPostCreated={fetchPosts} />
        </div>
      </div>
      <div id="feed" style={styles.feed}>
        {posts.length > 0 ? (
          posts
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map((post) => <Post key={post.post_id} post={post} />)
        ) : (
          <p style={globalStyles.text}>No posts available</p>
        )}
      </div>
    </>
  );
};

export default FeedContainer;

export const styles = {
  CreatePostContainer: {
    marginBottom: "20px",
  },
  container: {
    backgroundColor: "transparent",
    width: "800px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e1e8ed",
    height: "100%",
    overFlowY: "none",
  },
  header: {
    padding: "10px",
    borderBottom: "1px solid #e1e8ed",
    fontSize: "20px",
    color: "#14171a",
  },
  feed: {
    backgroundColor: "#f5f8fa",
    width: "800px",
    display: "flex",
    flexDirection: "column",
  },
};
