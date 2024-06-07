import React, { useState, useEffect } from 'react';
import { globalStyles } from '../styles/styles';
import CreatePost from './CreatePost';
import FeedPost from './feedPosts';
import axios from 'axios';

const FeedContainer = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/posts')
        .then(response => {
          setPosts(response.data);
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
        });
    }, []);

	return (
		<>
			<div style={styles.container}>
				<p style={styles.header}>See What's Happening!</p>
				<div style={styles.CreatePostContainer}>
					<CreatePost />
				</div>
			</div>
			<div id="feed" style={styles.feed}>
				{posts.length > 0 ? (
					posts.map((post) => <FeedPost key={post.post_id} post={post} />)
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
		marginBottom: '20px',
	},
	container: {
		backgroundColor: 'transparent',
		width: '800px',
		display: 'flex',
		flexDirection: 'column',
		border: '1px solid #e1e8ed',
		height: '100%',
		overFlowY: 'none',
	},
	header: {
		padding: '10px',
		borderBottom: '1px solid #e1e8ed',
		fontSize: '20px',
		color: '#14171a',
	},
    feed: {
        backgroundColor: '#f5f8fa',
        width: '800px',
        display: 'flex',
        flexDirection: 'column',
      },
};
