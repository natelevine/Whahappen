import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { App } from './components/App';
var rp = require('request-promise');
var db = require('./db/db');
import moment from 'moment';
import config from './configs/config';
import utils from './util/utils';

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/api/data/:userId', (req, res) => {

    let returnData = {};
    returnData['userId'] = req.params['userId'];

    let promiseArray = [];
    //get user email for fullStory request--
    db.getUserEmail(req).then((emailObj) => {
        console.log("got user email");
        let fullStoryPromise = fetchFullStories(emailObj.email);
        promiseArray.push(fullStoryPromise);
        console.log("pushed fullstoryPromise to array");

        let userNotesPromise = db.getUserNotes(req);
        promiseArray.push(userNotesPromise);
        console.log("pushed userNotesPromise to array");

        Promise.all(promiseArray).then((resolvedDataArray) => {
          console.log("resolved promises, now mapping, resolved array: ", resolvedDataArray);
          let returnArray = utils.mapFullStoriesToDisplayFormat(resolvedDataArray[0]).concat(utils.mapNotesToDisplayFormat(resolvedDataArray[1]))
          console.log("got mapped returnArray: ", returnArray);
          res.status(200).send(returnArray);
        });
    });
    /*
    //1. get fullstories
      {
        "UserId":5482345580986368,
        "SessionId":5647308616105984,
        "CreatedTime":1496155054,
        "FsUrl":"https://www.fullstory.com/ui/QK/session/5482345580986368:5647308616105984"
      }

    //2. get notes
      {
        "id":"474691302",
        "author":"AUTO",
        "createdate":"2017-05-17T14:27:46.763Z",
        "message_old":null,
        "user_id":"312283166",
        "message":"Sent Email:card.statement-notification - SNAPSHOT_ID:474691261",
        "super_sticky":false
      }

    //3. get events
    // parse and combine
    */

    // returnData['timelineData'] = dummyData;
    // res.status(200).send(returnData);
});

const fullStoryRequestOptions = {
    uri: 'https://www.fullstory.com/api/v1/sessions?email=',
    headers: {
      'Authorization': 'Basic ' + config.FULLSTORY_API_KEY
    },
    json: true
}

const fetchFullStories = (userEmail) => {
  if (!userEmail) {
    return [];
  }
  // Complete the uri with the user's email as a parameter
  fullStoryRequestOptions['uri'] += userEmail;
  console.log("fetching fullstories for user: ", userEmail);
  return rp(fullStoryRequestOptions).promise();
}

// universal routing and rendering
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;

  if (process.env.UNIVERSAL) {
    const context = {};
    markup = renderToString(
      <Router location={req.url} context={context}>
        <App />
      </Router>,
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.is404) {
      status = 404;
    }
  }

  return res.status(status).render('index', { markup });
});

// start the server
const port = process.env.PORT || 9999;
const env = process.env.NODE_ENV || 'production';
server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(
    `
      Server running on http://localhost:${port} [${env}]
      Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
    `);
});
