var _ = require('underscore');
var moment = require('moment');
var hstore = require('pg-hstore')();

function mapFullStoriesToDisplayFormat(fullStoryData) {
    console.log("mapping fullstorydata");
    var mappedArray = _.map(fullStoryData, function(entry) {
      return {
        type: 'fullstory',
        id: entry.SessionId,
        url: entry.FsUrl,
        timestamp: moment.unix(entry.CreatedTime)
      }
    });
    return mappedArray;
}

function mapNotesToDisplayFormat(noteData) {
  console.log("mapping notedata");
  var mappedArray = _.map(noteData, function(entry) {
    return {
      type: 'note',
      id: entry.id,
      author: entry.author,
      message: entry.message,
      timestamp: moment(entry.createdate)
    }
  });
  return mappedArray;
}

function mapEventsToDisplayFormat(eventData) {
  console.log("mapping eventData");
  var mappedArray = _.map(eventData, function(entry) {
    return {
      type: 'event',
      id: entry.id,
      eventName: entry.name,
      timestamp: moment(entry.time),
      properties: JSON.stringify(hstore.parse(entry.properties)).substring(0, 60) + "..."
    }
  });
  return mappedArray;
}

function interleaveByDate(nestedArray) {

  var flatArray = _.flatten(nestedArray);
  var interleavedArray = flatArray.sort(function(objA, objB) {
    if (objA.timestamp > objB.timestamp) {
      return -1;
    } else if (objB.timestamp > objA.timestamp) {
      return 1;
    } else {
      return 0;
    }
  });
  return interleavedArray;
  //.format("MMMM Do YYYY, h:mm:ssa")
}

module.exports = {
  mapFullStoriesToDisplayFormat: mapFullStoriesToDisplayFormat,
  mapNotesToDisplayFormat: mapNotesToDisplayFormat,
  mapEventsToDisplayFormat: mapEventsToDisplayFormat,
  interleaveByDate: interleaveByDate
}
