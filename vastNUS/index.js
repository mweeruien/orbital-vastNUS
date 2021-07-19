// const express = require('express')
// const path = require('path')
// const app = express()
// const port = process.env.PORT || 8080;
 
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname,'/index.html'))
// })
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname,'/faculties.html'))
// })

// app.use('/assets', express.static('assets'))
// app.use('/template', express.static('template'))

 
// app.listen(port)
// console.log('Server started at http://localhost:' + port);

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

//edited
// var MongoClient = require('mongodb') .MongoClient;

// var url = 'mogodb://localhost/vastNUS';

// MongoClient.connect(url, function(err, db) {
//   console.log("Connected");
//     db.close();
// });

//connect to database
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  const coursesSchema = new mongoose.Schema({
    CourseName: {
      type: String,
      //trim: true,
    },
    Faculty: {
      type: String,
      //trim: true,
    },
    RpCutOff: {
      type: String,
      //trim: true,
    },
    GpaCutOff: {
      type: String,
      //trim: true,
    },
    EmpRate: {
      type: String,
      //trim: true,
    },
    FTEmpRate: {
      type: String,
      //trim: true,
    },
    MedianSalary: {
      type: String,
      //trim: true,
    },
    Details: {
      type: String,
      //trim: true,
    },
    PageLink: {
      type: String,
      //trim: true,
    },
  });

//const { check, validationResult } = require('express-validator');
// NEW! Retrieve data from db

//const router = express.Router();
const Courses = mongoose.model('Course', coursesSchema); // IDK if this would work

// Courses.find({name: 'Computer Science'}, (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// })

// Displays the entire Database
router.get('/courses', (req, res) => {
  Courses.find()
    .then((courses) => {
      res.render('index', { title: 'Listing results', courses });
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});

// console.log(Courses.find({}).toArray);
