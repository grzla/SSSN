import React from "react";
import { globalStyles } from "../styles/styles";   

const FeedContainer = () => {
    return (
        <div>
            <h1>Feed</h1>
                <div id="feed" style={styles.feedContainer}>
                    <h2>Feed</h2>
                    <p style={globalStyles.text}>Feed content goes here</p>
                {/* <div id="friends">
                    <h2>Friends</h2>
                    <p>Friends list goes here</p>
                </div> */}
            </div>
        </div>
    );
}

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
