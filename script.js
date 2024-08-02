const express = require("express");
const app = express();

app.use(function(req,res,next) {
    console.log('Middleware Worked!');
    next();
});
app.get("/", function (req, res){
	res.send("Hello World");
});
app.use(function (req,res,next) {
    console.log("Middleware before Profile Page");
    next();
})
app.get("/profile", function (req,res,next) {
    return next(new Error('Something went wrong'));
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000);
