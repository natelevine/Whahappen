var express = require('express');
var db = require('./db/db');

var app = express();
var router = express.Router();

app.use(express.static('.'));
app.use('/', router);

router.get('/api/test', db.testQuery);

app.set('port', process.env.PORT || 9999);
app.listen(app.get('port'));

module.exports = router;
