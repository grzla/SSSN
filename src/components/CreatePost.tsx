import React from 'react';
import { globalStyles } from '../styles/styles';
import axios from 'axios';


const CreatePostModal = () => {

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const data = new FormData(event.target as HTMLFormElement);
		const post = {
			content: data.get('content'),
			user_id: 1, 
		};
		axios.post('http://localhost:3001/submit-post', post)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<form >
				<label>
					<p style={globalStyles.text}>Create Your Post</p>
					<textarea style={styles.textArea} />
				</label>
				<input type="submit" value="Submit" onClick={handleSubmit} />
			</form>
		</div>
	);
};

export const styles = {
	textArea: {
		width: '100%',
		height: '100px',
		backgroundColor: '#f9f9f9',
		color: '#14171a',
	},
	form: {
		backgroundColor: 'white',
		padding: '20px',
		borderRadius: '5px',
		width: '300px',
    marginBottom: '20px',
	},
	input: {
		width: '100%',
		marginBottom: '10px',
	},
};

export default CreatePostModal;
