const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

// get routes

app.get("/", (req, res) => {
  res.sendFile( __dirname + "./public/" + "index.html" );
});

// ---------------------------------------------------------- //

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})
