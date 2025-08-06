import express from 'express';


const app = express();
const port = 3000;



app.get('/', (req, res) => {

    const today = new Date();
    const day = today.getDay(); 

    let type= "a weekday"
    let advice="Keep pushing forward!"

    if (day === 0 || day === 6) {
        type;
    } else {
        type
    }

  res.render('index.ejs', {
     daytype: "weekday", 
     advice: "Keep pushing forward!" 
     });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});