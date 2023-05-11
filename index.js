const app = require('express')();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Listen On Port: ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send("Hello World");
})