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
      <th>{event.date}</th>
      <td className="time">{event.timestamp}</td>
      <td className="description">
        <h4>
          ID: {event.id}<br/>
          Event: {event.eventName}
          <p>
            {event.properties}
          </p>
        </h4>
      </td>
    </tr>
  );
};

export default EventNode;
