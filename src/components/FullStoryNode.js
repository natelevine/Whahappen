import React from 'react';

/*

 A FullStoryNode has the structure:
{
  id: xxx,
  url: xxx,
  timestamp: xx:xx,
}

*/
export const FullStoryNode = ({fullstory}) => {
  return (
    <tr className="fullstory-node">
      <th>June 8</th>
      <td className="time">{fullstory.timestamp}</td>
      <td className="description">
        <h4>
          ID: {fullstory.id}
          <p>
            url: {fullstory.url}
          </p>
        </h4>
      </td>
    </tr>
  );
};

export default FullStoryNode;