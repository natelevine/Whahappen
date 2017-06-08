var promise = require('bluebird');
var config = require('../configs/config');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = config.FOLLOWER_DB_URL;
var db = pgp(connectionString);

// add query functions
function testQuery(req, res, next) {
  db.any('select * from notes limit 10')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  testQuery: testQuery
};
