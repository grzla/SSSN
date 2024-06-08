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


app.post('/submit-post', (req, res) => {
  const { user_id, content } = req.body;

  // Verify user_id is valid
  const userQuery = 'SELECT * FROM users WHERE user_id = ?';
  connection.query(userQuery, [user_id], (userErr, userResult) => {
    if (userErr || userResult.length === 0) {
      console.error(userErr);
      return res.status(400).send('Invalid user ID');
    }

    const created_at = new Date();
    const query = 'INSERT INTO posts (user_id, content, created_at) VALUES (?, ?, ?)';
    connection.query(query, [user_id, content, created_at], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server error');
      } else {
        res.status(200).send('Post submitted successfully');
      }
    });
  });
});

app.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts';
  connection.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.status(200).send(result);
    }
  }
  );
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


app.post('/posts/:post_id', (req, res) => {
  // Increment the likes count for the post with the given ID
  connection.query('SELECT * FROM posts WHERE post_id = ?', [req.params.post_id], (error, results) => {
    // UPDATE posts SET likes = likes + 1 WHERE post_id = ?', [req.params.post_id], (error, results) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'An error occurred' });
    }
    res.send({ success: true, post: results[0] });
  });
});

app.post('/posts/:post_id/like', (req, res) => {
  // Increment the likes count for the post with the given ID
  connection.query('UPDATE posts SET likes = likes + 1 WHERE post_id = ?', [req.params.post_id], (error, results) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'An error occurred' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).send({ success: false, message: 'Post not found' });
    }

    res.send({ success: true });
  });
});

app.post('/posts/:post_id/dislike', (req, res) => {
  // Decrement the likes count for the post with the given ID
  connection.query('UPDATE posts SET likes = likes - 1 WHERE post_id = ?', [req.params.post_id], (error, results) => {
    if (error) {
      return res.status(500).send({ success: false, message: 'An error occurred' });
      }
    if (results.affectedRows === 0) {
      return res.status(404).send({ success: false, message: 'Post not found' });
    }

    res.send({ success: true });
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});