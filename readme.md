# Super Simple Social Network

    React
    TypeScript
    MySQL

Allow users to login with their password and create a social media post to the sites website.
the main page lists all post from all users.When you click a user name in a post it takes you to all the posts from that user.Every post should have a like and dislike button that calculates the total number of times it has been clicked (like/dislike).

Components:
Registration page {username, password}
Login page - {username, password}
Post button / CreatePost
Post - {username, date, text, likes, dislikes}
Like button
Dislike button
User feed {username, posts} (posts from user by date)
All feed {posts} (posts from all users by date)

User table:
CREATE TABLE users (
id INT AUTO_INCREMENT,
username VARCHAR(12),
password VARCHAR(50),
PRIMARY KEY (username)
);

Post table:
CREATE TABLE posts (
id INT AUTO_INCREMENT
username VARCHAR(12),
tweet VARCHAR(512),
likes INT,
dislikes INT,
PRIMARY KEY (username)
);
