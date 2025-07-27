import express from "express";
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`serever is started in port ${port}.`);
})
app.get(`/`,(req, res)=>{
    res.send("<h1>hello js <h1>")
})
app.get(`/hello`,(req, res)=>{
    res.send("<h1>Get the fuck out of here <h1>")
})