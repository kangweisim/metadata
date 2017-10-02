var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
app.get('/', express.static('public'));

app.post('/upload', upload.single('file'), (req, res, next) => {
  return res.json({size: req.file.size});
});

app.listen(3000, () => {
  console.log("Node.js is listening...");
});
