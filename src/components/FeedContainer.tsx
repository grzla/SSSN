import React from 'react';
import { globalStyles } from '../styles/styles';
import CreatePost from './CreatePost';

const FeedContainer = () => {
	return (
		<div>
			<h1 style={globalStyles.text}>See What's Happening!</h1>
			<CreatePost />
			<div id="feed" style={styles.feedContainer}>
				<p style={globalStyles.text}>Feed content goes here</p>
			</div>
		</div>
	);
};

export default FeedContainer;

export const styles = {
	feedContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
		border: '1px solid #e1e8ed',
	},
};
