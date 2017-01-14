import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression())

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/users', function(req, res) {
  res.json([
    {id: 1, firstName: "Rahul", lastName: "Kulkarni", email: "rohit@gmail.com"},
    {id: 1, firstName: "Rohit", lastName: "Dandnayak", email: "rahul@gmail.com"},
    {id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com"}
  ]);
});

app.listen(port, function(err){
 if(err)
  console.log(err); //eslint-disable-line no-console
 else
  open('http://localhost:' + port);
});
