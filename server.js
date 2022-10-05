const myIncludes = require('./index');

// Set up server
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json()); // Allow getting POST data from req.body

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'index.html'));
})

app.post('/api', async (req,res) => {
    try{
        const data = await req.body;
        // TODO: get haystack and needle data, and run myIncludes...
        res.send({message: `TEXT GOES HERE`})
    } catch (err) {
        res.send({message: err})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})