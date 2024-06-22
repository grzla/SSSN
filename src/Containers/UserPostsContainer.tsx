import React, { useState, useEffect } from "react";
import { globalStyles } from "../styles/styles";
import CreatePost from "./CreatePost";
import Post from "./Post";
import axios from "axios";

const UserPostsContainer = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/posts/${username}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [username]);

  return (
    <>
      <div style={globalStyles.container}>
        <p style={globalStyles.header}>Your Posts</p>
        <div style={globalStyles.CreatePostContainer}>
          <CreatePost />
        </div>
      </div>
      <div id="feed" style={styles.feed}>
        {posts.length > 0 ? (
          posts.map((post) => <Post key={post.post_id} post={post} />)
        ) : (
          <p style={globalStyles.text}>No posts available</p>
        )}
      </div>
    </>
  );
};

export default UserPostsContainer;
