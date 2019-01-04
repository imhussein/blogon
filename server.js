const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Load Statis Files
app.use(express.static(__dirname + '/dist/blogon'));

// Load Angular Routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/blogon/index.html'));
});

// Create Web Server
const server = http.createServer(app);

// Listen To Port On Server
app.listen(port, () => {
  console.log(`App Started At port ${port}`);
});