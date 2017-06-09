var promise = require('bluebird');
var config = require('../configs/config');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
// Connect to chartio follower db
var connectionString = config.FOLLOWER_DB_URL;
var db = pgp(connectionString);

// Connect to events follower
var eventsConnectionString = config.EVENTS_FOLLOWER_DB_URL;
var events_db = pgp(eventsConnectionString);

// add query functions
function getUserNotes(request) {
  return db.any('select * from notes where user_id=$1 order by createdate desc limit 10', request.params['userId']);
}

// returns an object with key "email" and value {usersEmail}
function getUserEmail(request) {
  return db.one('select email from users where id=$1', request.params['userId']);
}

function getUserEvents(request) {
  var query = 'select * from events as e \
    inner join user_distinctid_map as udm on e.distinctid=udm.distinctid \
    where udm.user_id=$1 \
    order by e.time desc \
    limit 20';
  return events_db.any(query, request.params['userId']);
}

module.exports = {
  getUserEmail: getUserEmail,
  getUserNotes: getUserNotes,
  getUserEvents: getUserEvents
};
