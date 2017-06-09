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

function getUserNotes(request) {
  return db.any('select * from notes where user_id=$1 limit 10', request.params['userId']);
}

// returns an object with key "email" and value {user'sEmail}
function getUserEmail(request) {
  return db.one('select email from users where id=$1', request.params['userId']);
}

module.exports = {
  getUserEmail: getUserEmail,
  getUserNotes: getUserNotes,
  testQuery: testQuery
};
