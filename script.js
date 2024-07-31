const { error } = require("console");
const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
	res.end("Hello World!");
});
server.listen(8080);

fs.writeFile('hey.txt','hey, hello kaise ho',(err)=>{
	if(err){
		console.error(err);
	}else{
		console.log("done");
	}
})

fs.appendFile("hey.txt", "\nMai toh aacha hu", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("done");
  }
});

fs.rename("hey.txt","hello.txt",(err)=>{
	if(err){
		console.error(err);
	}else{
		console.log("done");
	}
})

fs.copyFile("hello.txt", "./copy/chacha.txt", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("done");
  }
});

fs.unlink("hello.txt", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("done");
  }
});

fs.rm("./copy", { recursive: true }, (err) => {
	{
		if (err) {
			console.error(err.message);
		} else {
			console.log("done");
		}
	}
});
