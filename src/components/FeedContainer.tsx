import React from 'react';
import { globalStyles } from '../styles/styles';
import CreatePost from './CreatePost';

const FeedContainer = () => {
	return (
        <>
		<div style={styles.container}>
			<p style={styles.header}>See What's Happening!</p>
            <div style={styles.CreatePostContainer}>
			<CreatePost  />
            </div>
		</div>
			<div id="feed" >
				<p style={globalStyles.text}>Feed content goes here</p>
			</div>
        </>
	);
};

export default FeedContainer;

export const styles = {
    CreatePostContainer : {
        marginBottom : '20px',
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
        color : '#14171a',
    },
}
