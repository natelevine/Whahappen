var _ = require('underscore');
var moment = require('moment');

function mapFullStoriesToDisplayFormat(fullStoryData) {
    console.log("mapping fullstorydata");
    var mappedArray = _.map(fullStoryData, function(entry) {
      return {
        type: 'fullstory',
        id: entry.SessionId,
        url: entry.FsUrl,
        timestamp: moment.unix(entry.CreatedTime).format("MMMM Do YYYY, h:mm:ssa")
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
      timestamp: moment(entry.createdate).format("MMMM Do YYYY, h:mm:ssa")
    }
  });
  return mappedArray;
}

module.exports = {
  mapFullStoriesToDisplayFormat: mapFullStoriesToDisplayFormat,
  mapNotesToDisplayFormat: mapNotesToDisplayFormat
}
