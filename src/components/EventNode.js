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
    <tr className="event-node">
      <th>June 8</th>
      <td className="time">{event.timestamp}</td>
      <td className="description">
        <h4>ID: {event.id}</h4>
          <p>Event: {event.eventName}</p>
          <p>
            {event.properties}
          </p>
      </td>
    </tr>
  );
};

export default EventNode;
