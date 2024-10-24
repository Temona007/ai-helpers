require('dotenv').config({ path: './.env' });

const express = require('express');
const cors    = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Make folder avalieable for all
app.use(express.static('public'));

app.use('/api/openai', require('./routes/openai')); 

const port = process.env.PORT || 4242;

app.listen(port, () => console.log(`Server started on port ${port}`));

// ADDED

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});
