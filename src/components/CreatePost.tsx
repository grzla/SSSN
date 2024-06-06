import React from 'react';
import { globalStyles } from '../styles/styles';

const CreatePostModal = () => {
	return (
		<div>
			<h1>Create Post</h1>
			<form>
				<label>
					Post:
					<p style={globalStyles.text}>Create Your Post</p>
					<textarea style={styles.textArea} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export const styles = {
	textArea: {
		width: '100%',
		height: '100px',
		marginBottom: '10px',
		backgroundColor: '#f9f9f9',
		color: '#14171a',
	},
	form: {
		backgroundColor: 'white',
		padding: '20px',
		borderRadius: '5px',
		width: '300px',
	},
	input: {
		width: '100%',
		marginBottom: '10px',
	},
};

export default CreatePostModal;
