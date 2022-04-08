const express = require('express')
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.static('src'));

app.get('/cv', (req, res) => {
  res.sendFile('cv.html', { root: __dirname });
})

app.post('/joe', (req,res) => {
  console.log(req.body);
})



app.listen(port, () => {
  console.log(`Server is runnning on port: http://localhost:${port}`)
})