const express = require("express");
const app = express();
// app.all("/", (req, res) => {
//   console.log("Just got a request!");
//   res.send("Yo! Automotion Works");
// });
app.post('/linebot', (req, res) => {
    console.log(req.body)
    // books.push(req.body)
    res.status(200).json(req.body)
  })
app.listen(process.env.PORT || 3000);
