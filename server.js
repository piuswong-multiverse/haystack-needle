const myIncludes = require('./index');

// Set up server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'index.html'));
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})