import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
// require('dotenv').config()
// // const express = require('express');
// // const mysql = require('mysql');
// // const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME, 
    usersTable:  process.env.DB_USERS_TABLE,
    postsTable:  process.env.DB_POSTS_TABLE
  });

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.status(200).send('User registered successfully');
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 5000');
});