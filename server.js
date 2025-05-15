const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Serve login.html as the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});