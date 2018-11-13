const express = require('express');
//this line means: go look in node_module folder and find another folder called express in that folder, there will be a file that is deoing a bunch of magic and then exporting a magic variable for you and you are equaling express to that variable.
const app = express();

app.use(express.static('public'));

// this line creates a variable called app that is equal to whatever happens when we run the file that we got from requiring express on line one
app.get('/', (req, res, next)=>{
  res.sendFile(__dirname + '/views/home-page.html');
});
app.get('/about', (req, res, next)=>{
  res.sendFile(__dirname + '/views/about.html');
});
app.get('/images', (req, res, next)=>{
  res.sendFile(__dirname + '/views/images.html')
});
app.listen(3000, ()=>{
  console.log('My first app listening on port 3000!');
});