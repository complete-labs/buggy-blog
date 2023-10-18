const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'session token example'
  });
});

app.listen(8000, () => console.log('API is running on http://localhost:8000/login'));
