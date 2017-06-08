import React from 'react';

/*

 An EventNode has the structure:
{
  id: xxx,
  eventName: xxx,
  timestamp: xx:xx,
  properties: [xx, yy, zz]
}

*/
export const EventNode = ({event}) => {
  return (
    <div className="event-node">
        <h3>
          ID: {event.id}<br/>
          Time: {event.timestamp}<br/>
          Event: {event.eventName}
        </h3>
        <p>
          {event.properties}
        </p>
    </div>
  );
};

export default EventNode;
