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

      var note = {
        type: 'note',
        id: entry.id,
        author: entry.author,
        message: entry.message,
        timestamp: moment(entry.createdate)
      }

      if(entry.message.includes("Sent Email")) {
          note.id2 = 'sent'
      }
      if(entry.message.includes("Viewed Profile")) {
          note.id2 = 'view'
      }
      if(entry.message.includes("Comment")) {
          note.id2 = 'comment'
      }

    return note;
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
      properties: JSON.stringify(hstore.parse(entry.properties)).substring(0, 80) + "..."
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
  return addFormattedDates(interleavedArray);
  //.format("MMMM Do YYYY, h:mm:ssa")
}

function addFormattedDates(array) {
  return _.map(array, function(element) {
    element.date = element.timestamp.format("MMMM Do");
    element.timestamp = element.timestamp.format("h:mma");
    return element;
  })
}

module.exports = {
  mapFullStoriesToDisplayFormat: mapFullStoriesToDisplayFormat,
  mapNotesToDisplayFormat: mapNotesToDisplayFormat,
  mapEventsToDisplayFormat: mapEventsToDisplayFormat,
  interleaveByDate: interleaveByDate
}
