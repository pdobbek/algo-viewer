var express = require("express");
var indexRouter = require("./routes/index.js");

var app = express();
// using a views engine. Views are in the views dir
app.set("views", "views");
app.set("view engine", "ejs");

/** Middleware handlers. Those are called before processing the request and sening the response
 */
// allows for recognising the Request Object as a json
app.use(express.json());
// allows for recognising the Request Object as a string or array
// extended: true allows for nested objects
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));  // served before resolving any routes


app.use('/', indexRouter);

app.listen(3000, () => {
    console.log(`Express is running on port 3000`)
});