import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'



const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    password:  process.env.DB_PASSWORD,
    database:  process.env.DB_NAME, 
  });

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});


// Submit Post route
app.post('/submit-post', (req, res) => {
    const { title, content } = req.body;
  
    const query = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    connection.query(query, [title, content], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.status(200).send('Post submitted successfully');
      }
    });
  });

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        if (result.length > 0) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      }
    });
  });

// Sign up route
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