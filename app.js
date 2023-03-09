/REQUIRE
let express = require('express')
let app = express()
let morgan = require('morgan')
let bodyParser = require('body-parser')
let path = require('path')
// let html = require('/')
//API ROUTES
app.get("/", (req, res) => res.send('Hello World'));
app.get("/layout", (req, res) => res.send(" "));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//LISTENERS
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});