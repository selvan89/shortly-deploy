var app = require('./server-config.js');

var port = process.env.PORT || 5150;
app.listen(port);
console.log(port);

console.log('Server now listening on port ' + port);
