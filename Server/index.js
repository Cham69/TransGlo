const express = require ('express');
const app = express();
const port = 3001;

app.get('/', (req, res)=>{
    res.send('This is Home page');
})

app.listen(3001, ()=>{
    console.log(`App listens at port ${port}`);
})