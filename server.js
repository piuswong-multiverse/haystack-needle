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
        let result = myIncludes(data.haystack, data.needle).toString();
        console.log("Analyzing data:", data, "Found?", result); // debug
        res.send({message: result})
    } catch (err) {
        res.send({message: err})
    }
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})