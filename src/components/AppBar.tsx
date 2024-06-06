import React from 'react';
import { globalStyles } from '../styles/styles';

const AppBar = () => {
	return (
		<>
			<div style={styles.appBar}>
				<p style={globalStyles.text}>SSNS</p>

			<div style={styles.logout}>
				<button style={styles.button}>Logout</button>
			</div>
			</div>
		</>
	);
};
export const styles = {
	appBar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px',
		backgroundColor: '#f9f9f9',
		borderBottom: '1px solid #e1e8ed',
	},
    logout: {
      cursor: 'pointer',
      marginRight: '40px',
    },
    button: {
        backgroundColor: 'blue',
        border: 'none',
        cursor: 'pointer',
        },
};

export default AppBar;
