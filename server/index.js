const express = require('express'); //your original BE server
const app = express();


app.get("/hello", (req, res) => {
  res.send("Hello World")
})

app.listen(6000, () => console.log('Example app listening on port 6000!'))