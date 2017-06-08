var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://u7mjn9ql86sb63:p1i4dj7pduehc568jvgrh8qsi10@ec2-54-243-219-78.compute-1.amazonaws.com:5432/da34frnf9tgu15?sslmode=require&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory';
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
