var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const PORT = process.env.PORT || 8080;

app.get('/',  function(req, res) {
    res.render('home_page');
});

app.get('*', function(req, res) {
    res.render('404_page');
});

app.listen(8080);
console.log(`Server started on localhost:${ PORT }; press Ctrl-C to terminate...!`);
