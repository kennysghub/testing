const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api',(req,res,next)=> {
    console.log('in the / routte')
    res.send('Sanity Check');
});

app.listen(PORT, console.log(`Listening on ${PORT}`));
