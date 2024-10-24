require('dotenv').config({ path: './.env' });

const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Make folder available for all
app.use(express.static('public'));

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// App routes (API routes should come before wildcard routes)
app.use('/api/openai', require('./routes/openai'));

// Handle other routes and return the React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 4242;

app.listen(port, () => console.log(`Server started on port ${port}`));
