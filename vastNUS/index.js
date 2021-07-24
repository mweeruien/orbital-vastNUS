console.log("App loaded.")

const express = require('express')
const path = require('path')
const app = express()
const router = express.Router();
const port = process.env.PORT || 8080;
 
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/faculties.html', function (req, res) {
    res.sendFile(path.join(__dirname+'/faculties.html'));
});

router.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/matriculation.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/matriculation.html'));
});

router.get('/forum.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/forum.html'));
});

app.use('/assets', express.static('assets'))
app.use('/template', express.static('template'))
app.use('/', router); 
app.listen(port)
console.log('Server started at http://localhost:' + port);

