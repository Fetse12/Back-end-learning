import express from 'express';


const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

if (day === 0 || day === 6) {
  console.log("It's a weekend!");
} else {
  console.log("It's a weekday.");
}

app.get('/', (req, res) => {
  res.render('index.ejs', {
    daytype: (day === 0 || day === 6) ? "weekend" : "weekday",
    advice: (day === 0 || day === 6) ? "Enjoy your rest!" : "Keep pushing forward!"
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});