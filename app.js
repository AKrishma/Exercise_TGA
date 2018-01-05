
const   http = require('http'),
        url = require('url'),
        express = require('express'),
        fs = require('fs');
        demo = require('./code/file-conversion/file-conversion'),

// Global app object
        app = express();

/* let server = http.createServer((req,res)=> {
    res.writeHead(200, {'content-Type' : 'text/plain'});
    res.write("The date and time are currently: " + demo.myDateTime());
   var q = url.parse(req.url, true).query,
        txt = q.year + " " + q.month;
   res.end(' end '); 
}); */

//Mount the demo code
app.use('/code/file-conversion/file-conversion', require('./code/file-conversion/file-conversion'))

// define port and start server
let port =  process.env.port || 3000;
//app.get('/', (req, res) => res.send('Hello World'));
app.listen(port, (err) => {
    if(err) {
        return console.log('Something went wrong, ERROR: '+ err);
    }
    console.log('Server ready, Listening port on '+ port  +' for requests');
})