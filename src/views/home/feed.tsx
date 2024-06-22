import React from "react";
import { globalStyles } from "../../styles/styles";
// import FeedContainer from "../../components/FeedContainer";
import { Post, PostProps } from "../../components/Post";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppBar from "../../components/AppBar";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Feed: React.FC = () => {
  //   const [posts, setPosts] = useState<Post[]>([]);
  const [posts, setPosts] = useState([]);
  const { contextUsername } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      let url = "http://127.0.0.1:3001/posts";
      if (contextUsername) {
        url += `/user/${contextUsername}`;
        navigate(`/posts/user/${contextUsername}`);
      }
      console.log(`feed.tsx fetchposts - url is ${url}`);
      const response = await fetch(url);
      const data = await response.json();
      console.log(`feed.tsx fetchposts - data is ${data}`);
      setPosts(data);
    };
    fetchPosts();
  }, [contextUsername]);

  return (
    <div>
      <AppBar />
      <h1>{contextUsername ? `Posts by ${contextUsername}` : "All Posts"}</h1>
      {posts.map((post) => (
        <Post key={post.post_id} post={post} />
      ))}
    </div>
  );
};

// const Feed = () => {
// 	return (
// 		<>
// 			<AppBar />
// 			<div style={styles.page}>
// 				<div style={styles.container}>
// 					<FeedContainer />
// 				</div>
// 			</div>
// 		</>
// 	);
// };

export default Feed;

export const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    backgroundColor: "#fff",
    width: "100vw",
  },
  container: {
    backgroundColor: "transparent",
    width: "600px",
    display: "flex",
    flexDirection: "column",
  },
  sidebar: {
    width: "200px", // Sidebar width
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    border: "1px solid #e1e8ed",
    height: "calc(100vh - 40px)", // Height to fit viewport minus padding
    overflowY: "auto", // Allows scrolling within the sidebar
  },
  text: {
    color: "#14171a",
    fontSize: "16px", // Adjust font size as needed
  },
};
