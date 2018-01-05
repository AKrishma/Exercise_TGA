const express = require('express'),
      app = express(),
      router = express.Router(),
      fs = require('fs'),
      yaml = require('json2yaml'),

//  function  definitions (can be moved under controller) 
      myLogger = function (req, res, next) {
        console.log('LOGGED');
        next();
      },
      requestTime = function (req, res, next) {
        req.requestTime = Date.now()
        next()
      },
      jsonfileUpdate = function(req, res, next) {
        try {
          let filePath = 'user-data.json',
          updatedObject;
  
          let data = fs.readFile(filePath, 'utf8', function (err) {
              if(err) {
                  console.log('Error in reading '+ filePath+ ' file - ' + err);
              }
            });
              jsondata = JSON.parse(data);
               jsondata.forEach(function(item) {
                 let currentObject = JSON.parse(item);
                 let currentObjectLen = item.length;
                 //item.size = currentObjectLen;
                // currentObject.push(JSON.stringify('size : '+currentObjectLen));
                 updatedObject += JSON.stringify(currentObject);
              });
              fs.writeFile("results.json", JSON.stringify(updatedObject));
          

        /*   var jsonObj = fs.readFile('results.json');
          jsonObj = JSON.parse(jsonObj);
          var yamlData = yaml.stringify(jsonObj);
      fs.writeFile('user-data.yaml', yamlData); */
         // return res.send(updatedObject);
         // next();
      }
      catch(ex) {
          console.log('Some error in jsonfileUpdate code ' + ex);
      }
    },

    fileConverter = function(jsonObj) {
      var yamlData = yaml.stringify(jsonObj);
      fs.writeFile('user-data.yaml', yamlData, callback);
  };
// load (mount)  functions
//router.use(requestTime);
//router.use(myLogger);
router.use(jsonfileUpdate);
router.use(fileConverter);

router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  res.send('User Info');
});
router.get('/user/:id', function (req, res, next) {
  res.end(req.param.id);
});

// on root page, print hello world
router.get('/', function (req, res) {
  /* var responseText = 'Hello World!';
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText); */
  let responsejson =  req.jsonfileUpdate();
        req.fileConverter(responsejson, function(err) {
            if(err) {
                res.status(404).send('yaml file not saved');
                return;
            }
            res.send('yaml file saved');

        });
});

app.use('/', router);

let port =  process.env.port || 3000;
//listening to express server
app.listen(port, (err) => {
  if(err) {
      return console.log('Something went wrong, ERROR: '+ err);
  }
  console.log('Server ready, Listening port on '+ port  +' for requests');
})