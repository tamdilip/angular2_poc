// load mongoose package
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use native Node promises
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/angular')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// Create a schema
var userSchema = new mongoose.Schema({ username: String, password: String });
// Create a model based on the schema
var User = mongoose.model('User', userSchema);

// Create a user in memory
/* var newUser = new User({username: 'user', password: 12345 }); */

// Save it to database
/* newUser.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(newUser);
}); */

function authenticateUser(uname, pass){
  return User.find({username: uname, password: pass}, function (err, users) {
    if (err) return console.error(err);
    else if(users.length > 0) return true;
    return false;
  });
};

function b64Decoder(b64String){
  return Buffer.from(b64String, 'base64').toString("ascii"); 
}

app.post('/login', (req, res) => {
  var uname = b64Decoder(req.body.username); 
  var pass = b64Decoder(req.body.password); 
  User.find({username: uname, password: pass}, function (err, users) {
    if (err) return res.status(401).send();
    else if(users.length > 0) return res.status(200).send();
    return res.status(401).send();
  });
});

const server = app.listen(process.env.PORT || '3005', () => {
  console.log('App listening on port %s', server.address().port);
});