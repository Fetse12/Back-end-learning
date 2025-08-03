import express from "express";
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`serever is started in port ${port}.`);
})
app.get(`/`,(req, res)=>{
    res.send("<h1>hello js <h1>")
})
app.get(`/about`,(req, res)=>{
    res.send("<h1>go a hade and start it  <h1>")
})
app.get(`/contact`,(req, res)=>{
    res.send("<h1>go a hade and start it  <h1>")
})

