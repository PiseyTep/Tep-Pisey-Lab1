const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello, CI/CD!');
// res.send('Hello, GitHub Actions!'); --- IGNORE ---
});
module.exports = app;