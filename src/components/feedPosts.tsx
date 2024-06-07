import React from 'react';

const FeedPost = ({ post }) => {
  return (
    <div style={styles.postContainer}>
      <p style={styles.content}>{post.content}</p>
      <p style={styles.meta}>Posted by User {post.user_id} at {new Date(post.created_at).toLocaleString()}</p>
    </div>
  );
};

export const styles = {
  postContainer: {
    backgroundColor: '#fff',
    padding: '10px',
    borderBottom: '1px solid #e1e8ed',
  },
  content: {
    fontSize: '16px',
    color: '#14171a',
  },
  meta: {
    fontSize: '12px',
    color: '#657786',
  },
};

export default FeedPost;
