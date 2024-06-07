import React from 'react';
import { globalStyles } from '../../styles/styles';
import FeedContainer from '../../components/FeedContainer';
import AppBar from '../../components/AppBar';

const Feed = () => {
	return (
		<>
			<AppBar />
			<div style={styles.page}>
				<div style={styles.container}>
					<FeedContainer />
				</div>
			</div>
		</>
	);
};

export default Feed;

export const styles = {
	page: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: '100vh',
		backgroundColor: '#fff',
		width: '100vw',
	},
	container: {
		backgroundColor: 'transparent',
		width: '600px',
		display: 'flex',
		flexDirection: 'column',
	},
	sidebar: {
		width: '200px', // Sidebar width
		display: 'flex',
		flexDirection: 'column',
		padding: '10px',
		border: '1px solid #e1e8ed',
		height: 'calc(100vh - 40px)', // Height to fit viewport minus padding
		overflowY: 'auto', // Allows scrolling within the sidebar
	},
	text: {
		color: '#14171a',
		fontSize: '16px', // Adjust font size as needed
	},
};
